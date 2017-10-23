# thefrontend


## Getting Started

Create a new directory

Open a terminal window, navigate to the new directory and run:

`git clone https://github.com/dannydrinkwater/thefrontend.git .`

## Public

Ensure that your server webroot points to this directory.

A sample `robots.txt` file is also included for convenience.

A sample `crossdomain.xml` file is also included for convenience.
### .gitattributes

Normalise line endings within the Git repository.

### .gitignore

Project specific files and folders to be ignored. The contents of this file is quite minimal because **the majority of standard ignores should be set within a global .gitignore file.**

If there isn't a global .gitignore file setup, here are some example additional entries for this file:

    # OS Files
    .DS_Store
    .DS_Store?
    Thumbs.db

### package.json

Defines the dependecies required by Gulp for the tasks outlined above.