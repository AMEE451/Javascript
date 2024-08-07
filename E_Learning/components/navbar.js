
const navbar=()=>{

    return `  <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pages/addcourse.html">Add Course</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pages/dashboard.html">Dashboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pages/signup.html">Signup</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pages/login.html">Login</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>`

}

export default navbar
