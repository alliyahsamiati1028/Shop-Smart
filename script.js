// Ambil elemen input dan ul dari HTML
const inputItem = document.getElementById('item');
const itemList = document.getElementById('item-list');

// Fungsi untuk menambahkan item ke dalam daftar belanja
function addItem() {
    const itemName = inputItem.value.trim(); // Ambil nilai dari input dan trim whitespace

    if (itemName !== '') {
        const li = document.createElement('li'); // Buat elemen li baru
        li.textContent = itemName; // Isi teks elemen li dengan nama item
        itemList.appendChild(li); // Tambahkan elemen li ke dalam ul
        inputItem.value = ''; // Kosongkan input setelah ditambahkan
    }
}
