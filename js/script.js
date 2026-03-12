// Simulated vehicle storage (in-memory database)
let vehicles = [];
let nextId = 1;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set today's date as default
    document.getElementById('insertDate').valueAsDate = new Date();
    
    // Insert Vehicle Form Handler
    document.getElementById('insertForm').addEventListener('submit', handleInsertVehicle);
    
    // Update Vehicle Form Handler
    document.getElementById('updateForm').addEventListener('submit', handleUpdateVehicle);
});

// Insert Vehicle Function
function handleInsertVehicle(e) {
    e.preventDefault();
    
    const vehicle = {
        id: nextId++,
        name: document.getElementById('insertName').value,
        description: document.getElementById('insertDescription').value,
        date: document.getElementById('insertDate').value,
        status: document.getElementById('insertStatus').value
    };
    
    vehicles.push(vehicle);
    
    const resultDiv = document.getElementById('insertResult');
    resultDiv.className = 'result success';
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <strong>✅ Vehicle Inserted Successfully!</strong><br>
        <div class="vehicle-item" style="margin-top: 10px;">
            <strong>ID:</strong> ${vehicle.id}<br>
            <strong>Name:</strong> ${vehicle.name}<br>
            <strong>Description:</strong> ${vehicle.description}<br>
            <strong>Date:</strong> ${vehicle.date}<br>
            <strong>Status:</strong> ${vehicle.status}
        </div>
    `;
    
    document.getElementById('insertForm').reset();
    document.getElementById('insertDate').valueAsDate = new Date();
    
    console.log('Vehicle inserted:', vehicle);
    console.log('All vehicles:', vehicles);
}

// Update Vehicle Function
function handleUpdateVehicle(e) {
    e.preventDefault();
    
    const id = parseInt(document.getElementById('updateId').value);
    const newName = document.getElementById('updateName').value;
    const newStatus = document.getElementById('updateStatus').value;
    
    const vehicle = vehicles.find(v => v.id === id);
    const resultDiv = document.getElementById('updateResult');
    
    if (vehicle) {
        vehicle.name = newName;
        vehicle.status = newStatus;
        
        resultDiv.className = 'result success';
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <strong>✅ Vehicle Updated Successfully!</strong><br>
            <div class="vehicle-item" style="margin-top: 10px;">
                <strong>ID:</strong> ${vehicle.id}<br>
                <strong>Updated Name:</strong> ${vehicle.name}<br>
                <strong>Updated Status:</strong> ${vehicle.status}<br>
                <strong>Description:</strong> ${vehicle.description}<br>
                <strong>Date:</strong> ${vehicle.date}
            </div>
        `;
        
        console.log('Vehicle updated:', vehicle);
    } else {
        resultDiv.className = 'result error';
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `<strong>❌ Error:</strong> Vehicle with ID ${id} not found!<br><small>Please insert a vehicle first.</small>`;
    }
    
    document.getElementById('updateForm').reset();
}
