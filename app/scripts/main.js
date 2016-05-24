console.log('\'Allo \'Allo!');

angular
  .module('citApp', [])
  .run(function() {
    // initialize foundation
    $(document).foundation();
    console.log('JS initialized');
  });
