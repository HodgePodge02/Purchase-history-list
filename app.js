let Items = [];
// -- DOM selectors --
const MainButton = document.getElementById("AddItem");
const DateInput = document.getElementById("Date");
const DollarInput = document.getElementById("DollarAmount");
const CommentInput = document.getElementById("Comment");
const ListItems = document.getElementById("ListItems");
// -- Add event listeners --
MainButton.addEventListener("click", (e) => {
  const CurrentDateInputValue = DateInput;

  addItem(CurrentDateInputValue.value);
  console.log(CurrentDateInput);
});

// -- functions --

function addItem() {
  Items.unshift({
    date: DateInput.value,
    amount: DollarInput.value,
    comment: CommentInput.value,
  });
}
//putting the elements in an obj
