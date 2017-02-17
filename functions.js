function calculateAge (yearOfBirth) {
  var age = 2016 - yearOfBirth;
  return age;
}

function yearUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement >= 0) {
    console.log(name + ' retires in ' + retirement + 'years.');
  } else {
      console.log(name + ' is already retired.');
  }
}


yearUntilRetirement('Steve', 1980)
yearUntilRetirement('Martin', 1987)
