# JSON Presenter

A JavaScript library to present any JSON data in a nice format

## Run it locally

npm install
npm start

## Build Instructions

rm -rf build
git clone git@github.com:gcao/json-presenter.git build
cd build
git fetch
git checkout gh-pages
cd .. && npm run build
cd build
git add . && git commit
git push origin gh-pages

## Notes

* This project is bootstraped using [this template](https://github.com/rbartoli/react-boilerplate)
* [How can I beautify JSON programmatically?](http://stackoverflow.com/questions/2614862/how-can-i-beautify-json-programmatically)

