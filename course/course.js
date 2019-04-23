var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'osx',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'osx',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'OSX']
		}
	}
};

console.log(course.name)
console.log(course.teachers[1])
console.log(course.students[0].name)
console.log(course.students[1].computer.type)
console.log(course.preReqs.equipment)
console.log(course.preReqs.equipment.OSOptions[1])
console.log(course.preReqs.equipment.OSOptions[0] + ' or ' + course.preReqs.equipment.OSOptions[1])

var stud = [];
	
	for (var i = 0; i < course.students.length ; i++) {

			if (course.students[i].computer.OS === 'osx'){
				stud.push(course.students[i].name)	
			}
			 
	}



	console.log(stud.toString())




