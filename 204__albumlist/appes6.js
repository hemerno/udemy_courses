class Album {
  constructor(title, artist, year) {
    this.title = title;
    this.artist = artist;
    this.year = year;
  }
}

class UI {
  addAlbumToList(album) {
    const list = document.querySelector('#album-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${album.title}</td>
    <td>${album.artist}</td>
    <td>${album.year}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
  }

  clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#artist').value = '';
    document.querySelector('#year').value = '';
  }

  showAlert(message, className) {
    const div = document.createElement('div');

    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    const form = document.querySelector('#album-form');

    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 2000);
  }
  deleteAlbum(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
}

class Storage {
  static getAlbums() {
    let albums;
    if (localStorage.getItem('albums') === null) {
      albums = [];
    } else {
      albums = JSON.parse(localStorage.getItem('albums'));
    }

    return albums;
  }

  static displayAlbums() {
    const albums = Storage.getAlbums();

    albums.forEach((album) => {
      const ui = new UI();

      ui.addAlbumToList(album);
    });
  }

  static addAlbum(album) {
    const albums = Storage.getAlbums();

    albums.push(album);

    localStorage.setItem('albums', JSON.stringify(albums));
  }
  static removeAlbum() {}
}

document.addEventListener('DOMContentLoaded', Storage.displayAlbums);

document
  .querySelector('#album-form')
  .addEventListener('submit', function (event) {
    const title = document.querySelector('#title').value;
    const artist = document.querySelector('#artist').value;
    const year = document.querySelector('#year').value;

    // Album instance
    const album = new Album(title, artist, year);

    const ui = new UI();

    if (title === '' || artist === '' || year === '') {
      ui.showAlert('Fill in all fields', 'error');
    } else {
      Storage.addAlbum(album);
      ui.addAlbumToList(album);
      ui.showAlert('Album added', 'success');

      ui.clearFields();
    }

    event.preventDefault();
  });

document
  .querySelector('#album-list')
  .addEventListener('click', function (event) {
    const ui = new UI();
    ui.deleteAlbum(event.target);
    ui.showAlert('Removed!', 'success');
    event.preventDefault();
  });
