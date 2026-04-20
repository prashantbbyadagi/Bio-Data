const galleryUpload = document.getElementById('galleryUpload');
const galleryGrid = document.getElementById('galleryGrid');

if (galleryUpload && galleryGrid) {
	galleryUpload.addEventListener('change', (event) => {
		const selectedFiles = Array.from(event.target.files || []);

		selectedFiles.forEach((file) => {
			if (!file.type.startsWith('image/')) {
				return;
			}

			const imageUrl = URL.createObjectURL(file);
			const card = document.createElement('div');
			const image = document.createElement('img');

			card.className = 'gallery-item';
			image.src = imageUrl;
			image.alt = file.name;

			image.addEventListener('load', () => {
				URL.revokeObjectURL(imageUrl);
			});

			card.appendChild(image);
			galleryGrid.appendChild(card);
		});

		galleryUpload.value = '';
	});
}