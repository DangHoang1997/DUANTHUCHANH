// Hàm để thêm một mục mới vào danh sách
function addItem() {
    // Lấy giá trị từ ô input
    const itemInput = document.getElementById('itemInput');
    const newItemText = itemInput.value;

    // Kiểm tra xem ô input có trống không
    if (newItemText.trim() !== "") {
        // Tạo một thẻ li mới
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;

        // Tạo nút xóa cho mỗi mục
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            const li = this.parentNode;
            li.parentNode.removeChild(li);
        };

        // Thêm nút xóa vào thẻ li
        newItem.appendChild(deleteButton);

        // Thêm thẻ li vào danh sách
        const todoList = document.getElementById('todoList');
        todoList.appendChild(newItem);

        // Xóa nội dung trong ô input
        itemInput.value = '';
    }
}

// Hàm để xóa một mục khỏi danh sách (được gắn vào nút xóa trong addItem)
function deleteItem(e) {
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
}
