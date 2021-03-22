const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg',
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
  },
];

const profiles = profileIterator(data);

document.querySelector('#next').addEventListener('click', nextProfile);
nextProfile();

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    const profileDisplay = document.querySelector('#profile-display');

    // profileDisplay.prepend();

    profileDisplay.innerHTML = `
  <ul class="list-group">
  <li class="list-group-item">Name: ${currentProfile.name}</li>
  <li class="list-group-item">Age: ${currentProfile.age}</li>
  <li class="list-group-item">Location: ${currentProfile.location}</li>
  <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
  </ul>
  `;

    const imageContainer = document.querySelector('#image-display');
    imageContainer.innerHTML = `<img src='${currentProfile.image}'>`;
    // const ul = document.createElement('ul');
    // ul.classList.add('list-group');
    // const fieldsObj = { name, age, location, lookingfor, image };
    // Object.keys(fieldsObj).forEach((key) => {
    //   const li = document.createElement('li');
    //   li.classList.add('list-group-item');
    //   li.textContent = `${key}: ${currentProfile}.${key}`;
    //   profileDisplay.
    // });

    // const name = document.createElement('li');
    // name.classList.add('list-group-item');
    // name.textContent = `Name: ${currentProfile.name}`;
    // const age = document.createElement('li');
    // age.classList.add('list-group-item');
    // age.textContent = `Age: ${currentProfile.age}`;
    // const name = document.createElement('li');
    // name.classList.add('list-group-item');
    // name.textContent = `Name ${currentProfile.name}`;
  } else {
    window.location.reload();
  }
}

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// function*

// const fields = {
//   name,
//   age,
//   location,
// };

// Object.keys(fields).forEach((key) => {
//   console.log(key);
// });
