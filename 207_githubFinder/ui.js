class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-dark btn-block">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-dark">Public repos: ${user.public_repos}</span>
          <span class="badge badge-dark">Public gists: ${user.public_gists}</span>
          <span class="badge badge-dark">Followers: ${user.followers}</span>
          <span class="badge badge-dark">Following: ${user.following}</span>
          <br>
        </div>
      </div>
    </div>
    <h3 class="page-heading">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = '';

    repos.forEach(function (repo) {
      output += `
<div class="card card-body mb-2">
<div class="row">
<div class="col-md-6">
<a href="${repo.html_url}" target="_blank">${repo.name}</a>
</div>
<div class="col-md-6">
<span class="badge badge-dark">Stars: ${repo.stargazers_count}</span>
<span class="badge badge-dark">Watchers: ${repo.watchers_count}</span>
<span class="badge badge-dark">Forks: ${repo.forks_count}</span>
</div>
</div>
</div>
      `;
    });

    document.querySelector('#repos').innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement('div');
    div.className = className;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 1000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
}
