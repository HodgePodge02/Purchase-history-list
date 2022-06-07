let Items = [];
// -- DOM selectors --
const MainButton = document.getElementById("AddItem");
const DateInput = document.getElementById("Date");
const DollarInput = document.getElementById("DollarAmount");
const CommentInput = document.getElementById("Comment");
const ListItems = document.getElementById("ListItems");
// -- Add event listeners --
MainButton.addEventListener("click", (e) => {
  addItem();
});
// on click event calls add item function, item is then accessed via the console.
// -- functions --

function addItem() {
  Items.unshift({
    date: DateInput.value,
    amount: DollarInput.value,
    comment: CommentInput.value,
  });
  console.log(Items);
}
//putting the elements in an obj
