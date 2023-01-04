/*To avoid losing data when the server crashes, Santa Claus has decided to make incremental backups. A hacker called S4vitelf is helping him.

On one hand, we have the timestamp of when the last backup was made.

We also have the changes that have been made in an array of arrays. Each internal array contains two elements: the id of the modified file and the timestamp of the modification.

You have to create a program that returns an array with the id of the files that we would have to make backup because they have been modified since the last backup and sorted in ascending order. Example:

const lastBackup = 1546300800

const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

getFilesToBackup(lastBackup, changes) // => [ 1, 3 ]
// The file with id 1 has been modified twice
// after the last backup.

// The file with id 2 has not been modified after
// the last backup.

// The file with id 3 has been modified once
// after the last backup.

// We have to make a backup
// of the files 1 and 3.
Remember that:

Returns the id of the files that have been modified after the last backup.
Returns an empty array if there are no files to make backup.
Remember to sort ids in ascending order.*/

const lastBackup = 1546300800

const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]


// function getFilesToBackup(lastBackup, changes) {
//     let filtered = changes.filter((value, index, array) => 
//     array[index][1] > lastBackup
//     )
//     let map1 = filtered.map((x) => x[0])
//     let sorted = map1.sort((a,b) => a-b)
//      let filesToBackup = [...new Set(sorted)]
//     return filesToBackup
    
//     }
function getFilesToBackup(lastBackup, changes) {

    let filtered = changes.filter(x => x[1] > lastBackup)
    let ids = filtered.map(x => x[0])
    let sorted = ids.sort((a, b) => a - b)
    let backUp = [...new Set(sorted)]
    
  
    return backUp
  }
    console.log(getFilesToBackup(lastBackup, changes))