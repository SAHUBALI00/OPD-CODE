const hospitals = [
    {
      name: 'Fortis Hospital',
      address: 'Yusuf Sarai-green Park, Delhi',
      rating: 4.4,
      ratingsCount: 275,
      image: 'https://my1healthstorage.blob.core.windows.net/my1health/gallery/Test%20Image-fortis-hospital35.jpg',
      specialties: ['Cancer hospitals'],
      contact: '07795674334',
      recentEnquiries: 138,
      beds: '40/120 Available'
    },
    {
      name: 'Max Super Speciality Hospital',
      address: 'A-Block Shalimar Bagh, Delhi',
      rating: 4.3,
      ratingsCount: 17623,
      image: 'https://ishtargate.in/wp-content/uploads/2019/06/max-Saket-1.jpg',
      specialties: ['Thyroid Care', 'Family Medicine', 'Preventive Nephrology Consultation'],
      contact: '07795648756',
      recentEnquiries: 1778,
      beds: '78/210 Available'
    },
    {
      name: 'AIIMS',
      address: 'Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New Delhi, Delhi 110029',
      rating: 4.8,
      ratingsCount: '210k',
      image: 'https://images.indianexpress.com/2024/01/Untitled-design-70.jpg?w=640',
      specialties: ['Cardiology, Neurosciences, Oncology, Organ transplantation, many more...'],
      contact: '91-11-26588500',
      recentEnquiries: 87092,
      beds: '34/120 Available'
    }
  ];


  function displayHospitals() {
    const hospitalList = document.getElementById('hospitalList');
    hospitalList.innerHTML = '';  

    hospitals.forEach(hospital => {
      const hospitalCard = document.createElement('div');
      hospitalCard.classList.add('card');
      hospitalCard.innerHTML = `
        <img src="${hospital.image}" alt="Image of ${hospital.name}" height="150" width="150"/>
        <div class="card-content">
          <div class="card-header">
            <h2>${hospital.name}</h2>
            <div class="rating">
              <span>${hospital.rating}</span>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
              <span>${hospital.ratingsCount} Ratings</span>
            </div>
          </div>
          <div class="card-body">
            <i class="fas fa-map-marker-alt"></i>
            <p>${hospital.address}</p>
          </div>
          <div class="card-body">
            <span class="tags">
              ${hospital.specialties.map(specialty => `<span>${specialty}</span>`).join('')}
            </span>
          </div>
          <div class="card-footer">
            <button class="btn btn-green"><i class="fas fa-phone-alt"></i> ${hospital.contact}</button>
            <button class="btn btn-blue">Book Appointment</button>
            <button class="btn btn-whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</button>
            <div class="bed-info">
              <i class="fa-solid fa-bed"></i>
              <p>${hospital.beds}</p>
            </div>
            <div class="enquiry-info">
              <i class="fas fa-chart-line"></i>
              <span>${hospital.recentEnquiries} people recently enquired</span>
            </div>
            <i class="far fa-heart heart"></i>
          </div>
        </div>
      `;
      hospitalList.appendChild(hospitalCard);
    });
  }

  function filterHospitals() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const filteredHospitals = hospitals.filter(hospital => 
      hospital.name.toLowerCase().includes(searchValue)
    );

    const hospitalList = document.getElementById('hospitalList');
    hospitalList.innerHTML = ''; 

    filteredHospitals.forEach(hospital => {
      const hospitalCard = document.createElement('div');
      hospitalCard.classList.add('card');
      hospitalCard.innerHTML = `
        <img src="${hospital.image}" alt="Image of ${hospital.name}" height="150" width="150"/>
        <div class="card-content">
          <div class="card-header">
            <h2>${hospital.name}</h2>
            <div class="rating">
              <span>${hospital.rating}</span>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
              <span>${hospital.ratingsCount} Ratings</span>
            </div>
          </div>
          <div class="card-body">
            <i class="fas fa-map-marker-alt"></i>
            <p>${hospital.address}</p>
          </div>
          <div class="card-body">
            <span class="tags">
              ${hospital.specialties.map(specialty => `<span>${specialty}</span>`).join('')}
            </span>
          </div>
          <div class="card-footer">
            <button class="btn btn-green"><i class="fas fa-phone-alt"></i> ${hospital.contact}</button>
            <button class="btn btn-blue">Book Appointment</button>
            <button class="btn btn-whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</button>
            <div class="bed-info">
              <i class="fa-solid fa-bed"></i>
              <spn>${hospital.beds}  Available</span>
            </div>
            <div class="enquiry-info">
              <i class="fas fa-chart-line"></i>
              <span>${hospital.recentEnquiries} people recently enquired</span>
            </div>
            <i class="far fa-heart heart"></i>
          </div>
        </div>
      `;
      hospitalList.appendChild(hospitalCard);
    });
}
window.onload = displayHospitals;