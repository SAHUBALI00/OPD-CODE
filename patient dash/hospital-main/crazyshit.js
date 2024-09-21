const medicines = [           //if any one is editing this javascript so please make sure you edit the rest logic names too
    {
        name: 'Paracetamol',
        details: '500mg, For Fever',
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/NT/CN/IX/82882300/dolo-500-paracetamol-tablet-250x250.jpg',
        status: 'In Stock'
    },
    {
        name: 'Aspirin',
        details: '300mg, Pain Relief',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/330506870/UM/GZ/QO/135658020/aspirin-dispersible-tablets-500x500.jpg',
        status: 'Out of Stock'
    },
    {
        name: 'Ibuprofen',
        details: '200mg, Anti-inflammatory',
        image: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/nyftsymbj7cydmg6t1wu.jpg',
        status: 'In Stock'
    },
    {
        name: 'Amoxicillin',
        details: '250mg, Antibiotic',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/KR/BP/LS/23618296/amoxycillin-250mg-cap-1000x1000.jpg',
        status: 'In Stock'
    },
    {
        name: 'Cetirizine',
        details: '10mg, Anti-Allergy',
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/PN/RG/HF/2593018/cetirizine-tablets-ip-10mg-1000x1000.jpg',
        status: 'Out of Stock'
    },
    {
        name: 'i-pill',
        details: 'Emergency Contraceptive for Women',
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/RR/VM/JW/133156268/i-pill-1000x1000.jpg',
        status: 'In Stock'
    }
];

function displayMedicines() {
    const medicineList = document.getElementById('medicineList');
    medicineList.innerHTML = '';  
    medicines.forEach(medicine => {
        const medicineItem = document.createElement('div');
        medicineItem.classList.add('medicine-item');
        medicineItem.innerHTML = `
            <div class="medicine-info">
                <img src="${medicine.image}" alt="${medicine.name}" class="medicine-image">
                <div>
                    <span class="medicine-name">${medicine.name}</span><br>
                    <span class="medicine-details">${medicine.details}</span>
                </div>
            </div>
            <span class="medicine-status ${medicine.status === 'In Stock' ? 'in-stock' : 'out-of-stock'}">
                ${medicine.status}
            </span>
        `;
        medicineList.appendChild(medicineItem);
    });
}

function filterMedicines() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const filteredMedicines = medicines.filter(medicine => 
        medicine.name.toLowerCase().includes(searchValue)
    );
    
    const medicineList = document.getElementById('medicineList');
    medicineList.innerHTML = '';  
    filteredMedicines.forEach(medicine => {
        const medicineItem = document.createElement('div');
        medicineItem.classList.add('medicine-item');
        medicineItem.innerHTML = `
            <div class="medicine-info">
                <img src="${medicine.image}" alt="${medicine.name}" class="medicine-image">
                <div>
                    <span class="medicine-name">${medicine.name}</span><br>
                    <span class="medicine-details">${medicine.details}</span>
                </div>
            </div>
            <span class="medicine-status ${medicine.status === 'In Stock' ? 'in-stock' : 'out-of-stock'}">
                ${medicine.status}
            </span>
        `;
        medicineList.appendChild(medicineItem);
    });
}

window.onload = displayMedicines;
