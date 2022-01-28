# Shiny Tower
Winner of over 200 Game of the Year Awards, Shiny Tower Special Edition brings the epic fantasy to life in stunning detail.

# How To Run Stable
https://shinytower.com


# How To Run Development
1. `pip install -r requirements.txt`
2. `uvicorn main:app --reload`
3. Open localhost in the selected port (usually 8000, ie `http://localhost:8000/`)

# How To Update Stable (Authorized Users)
1. Install Heroku
2. `heroku login`
3. Add heroku remote to git `heroku git:remote -a shinytower`
4. Make sure you are in main branch `git checkout main`
5. `git push heroku main`

# License
By contributing to this project ([Shiny Tower](https://github.com/nicszerman/shinytower)), you are agreeing to the [license](license.md).
