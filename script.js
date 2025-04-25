document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

function toggleMenu() {
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
}

hamburger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

// Close menu when clicking on links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

    // Simple Cart Counter
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    
    // Update cart count display
    function updateCartCount() {
        cartCountElement.textContent = cartCount;
    }
    
    // Vehicle Data
    const vehicles = [
        {
            id: 1,
            name: 'Toyota Corolla',
            category: 'economy',
            img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            specs: {
                seats: 5,
                bags: 2,
                doors: 4,
                transmission: 'Automatic'
            },
            price: 45,
            description: 'The Toyota Corolla is a reliable and fuel-efficient compact car perfect for city driving and short trips.'
        },
        {
            id: 2,
            name: 'BMW 5 Series',
            category: 'luxury',
            img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            specs: {
                seats: 5,
                bags: 3,
                doors: 4,
                transmission: 'Automatic'
            },
            price: 120,
            description: 'Experience luxury with the BMW 5 Series, featuring premium interiors and powerful performance.'
        },
        {
            id: 3,
            name: 'Ford Explorer',
            category: 'suv',
            img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            specs: {
                seats: 7,
                bags: 4,
                doors: 4,
                transmission: 'Automatic'
            },
            price: 85,
            description: 'The Ford Explorer is a spacious SUV ideal for family trips with plenty of cargo space.'
        },
        {
            id: 4,
            name: 'Honda Civic',
            category: 'economy',
            img: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            specs: {
                seats: 5,
                bags: 2,
                doors: 4,
                transmission: 'Automatic'
            },
            price: 50,
            description: 'The Honda Civic offers great fuel economy and a comfortable ride for your daily commute.'
        },
        {
            id: 5,
            name: 'Porsche 911',
            category: 'sports',
            img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            specs: {
                seats: 2,
                bags: 1,
                doors: 2,
                transmission: 'Automatic'
            },
            price: 200,
            description: 'Drive the iconic Porsche 911 for an exhilarating sports car experience.'
        },
        {
            id: 6,
            name: 'Mercedes S-Class',
            category: 'luxury',
            img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            specs: {
                seats: 5,
                bags: 3,
                doors: 4,
                transmission: 'Automatic'
            },
            price: 150,
            description: 'The Mercedes S-Class redefines luxury with cutting-edge technology and supreme comfort.'
        },
        {
            id: 7,
            name: 'Jeep Wrangler',
            category: 'suv',
            img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            specs: {
                seats: 5,
                bags: 2,
                doors: 4,
                transmission: 'Manual'
            },
            price: 90,
            description: 'The Jeep Wrangler is perfect for off-road adventures with its rugged design and 4x4 capability.'
        },
        {
            id: 8,
            name: 'Chevrolet Camaro',
            category: 'sports',
            img: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            specs: {
                seats: 4,
                bags: 1,
                doors: 2,
                transmission: 'Automatic'
            },
            price: 180,
            description: 'The Chevrolet Camaro delivers thrilling performance with its powerful engine and sporty design.'
        }
    ];
    
    // Display Vehicles
    const vehicleGrid = document.querySelector('.vehicle-grid');
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    function displayVehicles(filter = 'all') {
        vehicleGrid.innerHTML = '';
        
        const filteredVehicles = filter === 'all' 
            ? vehicles 
            : vehicles.filter(vehicle => vehicle.category === filter);
        
        filteredVehicles.forEach(vehicle => {
            const vehicleCard = document.createElement('div');
            vehicleCard.className = 'vehicle-card';
            vehicleCard.innerHTML = `
                <div class="vehicle-img">
                    <img src="${vehicle.img}" alt="${vehicle.name}">
                </div>
                <div class="vehicle-info">
                    <h3>${vehicle.name}</h3>
                    <div class="vehicle-specs">
                        <span><i class="fas fa-user"></i> ${vehicle.specs.seats}</span>
                        <span><i class="fas fa-suitcase"></i> ${vehicle.specs.bags}</span>
                        <span><i class="fas fa-door-open"></i> ${vehicle.specs.doors}</span>
                        <span><i class="fas fa-cog"></i> ${vehicle.specs.transmission}</span>
                    </div>
                    <div class="vehicle-price">
                        <div class="price">$${vehicle.price}<span>/day</span></div>
                        <button class="btn view-details-btn" data-id="${vehicle.id}">View Details</button>
                    </div>
                </div>
            `;
            vehicleGrid.appendChild(vehicleCard);
        });
    }
    
    // Filter Vehicles by Category
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            displayVehicles(category);
        });
    });

    // Modal functionality
    const modal = document.getElementById('car-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalBody = document.getElementById('modal-body');
    
    // Open modal with vehicle details
    function openModal(vehicleId) {
        const vehicle = vehicles.find(v => v.id === vehicleId);
        
        modalBody.innerHTML = `
            <div class="modal-img">
                <img src="${vehicle.img}" alt="${vehicle.name}">
            </div>
            <div class="modal-info">
                <h2>${vehicle.name}</h2>
                <p>${vehicle.description}</p>
                <div class="modal-specs">
                    <div class="modal-spec">
                        <i class="fas fa-user"></i>
                        <span>${vehicle.specs.seats} Seats</span>
                    </div>
                    <div class="modal-spec">
                        <i class="fas fa-suitcase"></i>
                        <span>${vehicle.specs.bags} Bags</span>
                    </div>
                    <div class="modal-spec">
                        <i class="fas fa-door-open"></i>
                        <span>${vehicle.specs.doors} Doors</span>
                    </div>
                    <div class="modal-spec">
                        <i class="fas fa-cog"></i>
                        <span>${vehicle.specs.transmission} Transmission</span>
                    </div>
                </div>
                <div class="modal-price">
                    $${vehicle.price} <span>/ day</span>
                </div>
                <div class="modal-btns">
                    <button class="btn add-to-cart-btn" data-id="${vehicle.id}">Add to Cart</button>
                    <button class="btn book-now-btn">Book Now</button>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Show notification when vehicle is added
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => notification.classList.add('show'), 10);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 2000);
    }
    
    // Event delegation for view details and add to cart buttons
    document.addEventListener('click', function(e) {
        // View details button
        if (e.target.classList.contains('view-details-btn')) {
            const vehicleId = parseInt(e.target.dataset.id);
            openModal(vehicleId);
        }
        
        // Add to cart button
        if (e.target.classList.contains('add-to-cart-btn')) {
            cartCount++;
            updateCartCount();
            showNotification('Vehicle added to cart');
        }
        
        // Book now button
        if (e.target.classList.contains('book-now-btn')) {
            cartCount++;
            updateCartCount();
            showNotification('Vehicle booked successfully');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Initialize with all vehicles
    displayVehicles();


    // Show/hide button based on scroll position
    window.onscroll = function() {
    const scrollButton = document.getElementById('scrollButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
    };
    
    // Scroll to top when clicked
    document.getElementById('scrollButton').addEventListener('click', function() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
    });
});