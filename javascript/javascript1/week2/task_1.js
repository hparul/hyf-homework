//function to get fullname of a person

function getFullname(firstname, lastname) {
  const fullname = firstname + " " + lastname;
  return fullname;
}

fullname1 = getFullname("Parul", "Jain");
fullname2 = getFullname("Peter", "Pan");
console.log(fullname1);
console.log(fullname2);

//code for - when argument for useFormalName is provided when function is called

function getFormalFullname(firstname, lastname, useFormalName) {
  if (useFormalName == true) {
    const fullname = "Lord" + " " + firstname + " " + lastname;

    return fullname;
  } else {
    const fullname = firstname + " " + lastname;

    return fullname;
  }
}

getFormalFullname("", "");

/* function if there is a checkbox for gender of the user and user formal name*/

function getGenderFullname(firstname, lastname, useFormalName, gender) {
  if (gender == "male" && useFormalName == true) {
    const fullname = "Lord" + " " + firstname + " " + lastname;

    return fullname;
  } else if (gender == "female" && useFormalName == true) {
    const fullname = "Lady" + " " + firstname + " " + lastname;

    return fullname;
  } else {
    const fullname = firstname + " " + lastname;

    return fullname;
  }
}

fullname1 = getGenderFullname("Parul", "Jain", true, "female"); // if checkbox is there, then no need to give arguments for gender and useFormalName here.
fullname2 = getGenderFullname("Peter", "Pan", true, "male");
fullname3 = getGenderFullname("peehu", "jain");
console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
