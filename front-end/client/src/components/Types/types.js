// Définir le type de tâche
const TaskT = {
	id: 'task1',
	title: 'Créer une application de gestion de tâches',
	description: 'Développer une application web permettant de créer, organiser et suivre les tâches.',
	priority: 'high',
	deadline: 120, // 2 heures
	image: 'task_image.jpg',
	alt: 'Image de tâche',
	tags: [
		{ title: 'Développement', bg: '#ff7e67', text: '#ffffff' },
		{ title: 'Web', bg: '#6fd7d9', text: '#ffffff' },
	],
};

// Définir le type de colonne
const Column = {
	name: 'Backlog', // Nom de la colonne
	items: [TaskT], // Tableau des tâches dans la colonne
};

// Définir le type des colonnes
const Columns = {
	backlog: Column, // Colonne de la liste de tâches
	pending: { name: 'Pending', items: [] }, // Colonne des tâches en attente
	todo: { name: 'To Do', items: [] }, // Colonne des tâches à faire
	doing: { name: 'Doing', items: [] }, // Colonne des tâches en cours
	done: { name: 'Done', items: [] }, // Colonne des tâches terminées
};

// Ajouter une autre tâche à la colonne backlog
const anotherTask = {
	id: 'task2',
	title: 'Tester l\'application de gestion de tâches',
	description: 'Effectuer des tests unitaires et d\'intégration pour assurer le bon fonctionnement de l\'application.',
	priority: 'medium',
	deadline: 60, // 1 heure
	tags: [
		{ title: 'Tests', bg: '#ffce96', text: '#ffffff' },
		{ title: 'Qualité', bg: '#9ad3bc', text: '#ffffff' },
	],
};

Columns.backlog.items.push(anotherTask);
