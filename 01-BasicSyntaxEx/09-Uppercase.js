function UpperCase(text) {
  let pattern = /(?<word>[\w]+)/g;
  let arr = text.match(pattern);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toUpperCase();
  }
  console.log(arr.join(", "));
}
UpperCase("Hi, how are you?");
