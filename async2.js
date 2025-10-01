function confess(name) {
    console.log('HI ' + name + " I want to say.... I love you.")
}


function query(name, callback, name2) {
    console.log("What do you want " + name + "?")
    if (typeof callback == "function")
        callback(name2)
}

query("Eham", confess, "Moumita")


