document.addEventListener('DOMContentLoaded', () => {
    const fetchPetsByCategory = (categoryName = '', sortPriceDesc = false) => {
        let url = 'https://openapi.programming-hero.com/api/peddy/pets';
        if (categoryName) {
            url = `https://openapi.programming-hero.com/api/peddy/category/${categoryName}`;
        }

        const spinner = document.getElementById('spinner');
        const petsGrid = document.getElementById('petsGrid');
        const likedPetsGrid = document.getElementById('likedPetsGrid');

        spinner.classList.remove('hidden'); 
        petsGrid.classList.add('hidden'); 
        likedPetsGrid.classList.add('hidden'); 

        setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const pets = categoryName ? data.data : data.pets;
                    petsGrid.innerHTML = ''; 

                    
                    if (sortPriceDesc) {
                        pets.sort((a, b) => b.price - a.price);
                    }

                    if (pets.length === 0) {
                        const noPetsImage = document.createElement('div');
                        noPetsImage.innerHTML = `
                            <div class="flex flex-col items-center justify-center h-full">
                                <img src="../images/error.webp" alt="No pets found" />
                                <p>No pets found</p>
                            </div>`;
                        noPetsImage.classList.add('card', 'p-4', 'flex', 'flex-col', 'items-start', 'border', 'rounded-xl');
                        petsGrid.appendChild(noPetsImage);
                        return;
                    }

                    pets.forEach(pet => {
                        const card = document.createElement('div');
                        card.classList.add('card', 'p-4', 'flex', 'flex-col', 'items-start', 'border', 'rounded-xl');
                        card.innerHTML = `
                            <img src="${pet.image || 'no-image.jpg'}" class="w-full rounded-lg object-cover" alt="${pet.pet_name || 'No pet name'}">
                            <h3 class="text-lg font-semibold">${pet.pet_name || 'No pet name'}</h3>
                            <p class="flex items-center text-sm text-gray-600">
                                <img class="w-4 h-4 mr-2" src="https://img.icons8.com/?size=48&id=115909&format=png" alt="Breed Icon"/>Breed: ${pet.breed || 'No breed'}
                            </p>
                            <p class="flex items-center text-sm text-gray-600">
                                <img class="w-4 h-4 mr-2" src="https://img.icons8.com/?size=100&id=36610&format=png" alt="Gender Icon"/>Gender: ${pet.gender || 'No gender'}
                            </p>
                            <p class="flex items-center text-sm text-gray-600">
                                <img class="w-4 h-4 mr-2" src="https://img.icons8.com/ios-filled/50/price-tag.png" alt="Price Icon"/> Price: ${pet.price || 'No price'}$
                            </p>
                            <p class="flex items-center text-sm text-gray-600">
                                <img class="w-4 h-4 mr-2" src="https://img.icons8.com/ios-filled/50/calendar.png" alt="Birthdate Icon"/>Date of Birth: ${pet.date_of_birth || 'No birthdate'}
                            </p>
                            <div class="flex space-x-1 w-full mt-4">
                                <button class="like-btn btn btn-outline flex items-center">
                                    <img src="https://img.icons8.com/?size=48&id=u8MTpAq972MG&format=png" alt="Like Icon" class="w-5 h-5 mr-2"/>
                                    Like
                                </button>
                                <button class="adopt-btn btn btn-outline text-[#0E7A81]" onclick="my_modal_5.showModal()">Adopt</button>
                                <button class="btn btn-outline text-[#0E7A81] details-btn" data-id="${pet.petId || 'No pet ID'}">Details</button>
                            </div>`;
                        petsGrid.appendChild(card);

                        //  Like button functionality
                        card.querySelector('.like-btn').addEventListener('click', () => {
                            const img = document.createElement('img');
                            img.src = pet.image;
                            img.classList.add('w-full', 'h-auto', 'rounded-md', 'object-cover');
                            likedPetsGrid.appendChild(img);
                        });

                        // Details button functionality opening modal
                        card.querySelector('.details-btn').addEventListener('click', () => {
                            openModal(pet); 
                        });
                    });
                })
                .catch(error => console.error('Error fetching pets:', error))
                .finally(() => {
                    spinner.classList.add('hidden'); 
                    petsGrid.classList.remove('hidden'); 
                    likedPetsGrid.classList.remove('hidden');
                });
        }, 2000);
    };

    const openModal = (pet) => {
        document.getElementById('petName').innerText = pet.pet_name ?? 'No pet name';
        document.getElementById('petImage').src = pet.image ?? 'no-image.jpg';
        document.getElementById('petBreed').innerText = pet.breed ?? 'No breed';
        document.getElementById('petGender').innerText = pet.gender ?? 'No gender';
        document.getElementById('petBirth').innerText = pet.date_of_birth ?? 'No birthdate';
        document.getElementById('petPrice').innerText = `${pet.price ?? 'No price'}$`;
        document.getElementById('petVaccinatedStatus').innerText = pet.vaccinated_status ?? 'No vaccination status';
        document.getElementById('petDetails').innerText = pet.pet_details ?? 'No pet details';

        // Show the modal
        document.getElementById('petDetailsModal').classList.remove('hidden');
    };

    // Function to close the modal
    const closeModal = () => {
        document.getElementById('petDetailsModal').classList.add('hidden');
    };

   
    document.getElementById('closeModal').addEventListener('click', closeModal);

    // Fetch and display default pets on page load
    fetchPetsByCategory();
    function showModalWithCountdown() {
        const modal = document.getElementById('my_modal_5');
        const countdownText = document.getElementById('countdownText');
        
        // Display the modal
        modal.showModal();
    
        let countdown = 3;
        countdownText.textContent = `Starting in ${countdown}...`;
    
        const countdownInterval = setInterval(() => {
            countdown--;
            countdownText.textContent = `Starting in ${countdown}...`;
    
            if (countdown === 0) {
                clearInterval(countdownInterval);  
                modal.close();  
            }
        }, 1000); 
    }
    
    // Trigger the modal on adopt button click
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('adopt-btn')) {
            showModalWithCountdown();
        }
    });
    
    
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(response => response.json())
    .then(data => {
        const categories = data.categories;
        const categoryButtons = document.getElementById('category-buttons');

        categories.forEach(category => {
            const button = document.createElement('button');
            button.classList.add('btn', 'btn-outline', 'rounded-lg', 'p-3', 'm-1', 'flex', 'flex-col', 'items-center');

            const img = document.createElement('img');
            img.src = category.category_icon;
            img.alt = `${category.category} Icon`;
            img.classList.add('w-8', 'h-8', 'mb-2');  

            const text = document.createElement('span');
            text.innerText = category.category;
            text.classList.add('text-sm', 'font-semibold', 'text-gray-600');

            button.appendChild(img);
            button.appendChild(text);

          
            button.addEventListener('click', () => {
                // Fetch pets by category
                fetchPetsByCategory(category.category);

                const allButtons = document.querySelectorAll('#category-buttons button');
                allButtons.forEach(btn => btn.classList.remove('active'));

                
                button.classList.add('active');
            });

            categoryButtons.appendChild(button);
        });
    })
    .catch(error => console.error('Error fetching categories:', error));


    // Sort pets by price descending
    document.getElementById('sortPriceDesc').addEventListener('click', () => {
        fetchPetsByCategory('', true); 
    });
}); 