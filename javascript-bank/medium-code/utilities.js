// DRY ----- DO NOT REPEAT YOURSELF

// hold the input field value & convert the value in number
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = "";
    return inputFieldValue;
};

// hold the element innerText & convert the innerText in number
function getElementValue(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
};

// hold the element innerText & set the innerText new value
function setElementValue(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}


/** 
------------- চ্যালেঞ্জ নাম্বার টু ------------

একটা ডিসকাউন্ট ক্যালকুলেটর এর প্রাকটিস দিয়েছি। সেটা করো। যেখানে একটা প্রাইস লেখা থাকবে 
এবং একটা বাটন আছে। সেটাতে ক্লিক করলে প্রাইস ৩০% কমে যাবে। এইটার আরেকটু এডভান্সড 
ভার্সন হবে। তুমি যে Apply বাটনে ক্লিক করবে তখন যদি পাশের টেক্সট বক্স এ DISC30 লেখা থাকে 
তাহলে ডিসকাউন্ট কাজ করবে। প্রাইস ৩০% কমবে। আর যদি DISC30 না লিখে অন্য কিছু লিখে। 
যেমন ধরো DOM30 বা DISCOUNT30 বা অন্য কিছু। তাহলে ডিসকাউন্ট কাজ হবে না। 

-------------- চ্যালেঞ্জ নাম্বার থ্রি  -------------

Text Editor টাইপের একটা লে-আউট বানাবে। সেখানে একটা Textarea থাকবে। সাথে বেশ কিছু বাটন থাকবে। 
এদের মধ্যে কোনো একটি বাটনে ক্লিক করলে textarea এর ভিতরের লিখা গুলোর স্টাইল বোল্ড হয়ে যাবে। ঠিক 
একইভাবে অন্যবাটন গুলো ব্যাবহার করে দেখো ইটালিক, আন্ডারলাইন, লেফট অ্যালাইন, রাইট অ্যালাইন, সেন্টার 
অ্যালাইন করতে পারো কিনা। এছাড়া একটা নম্বর টাইপের ইনপুট ফিল্ডে ফন্ট সাইজ ইনপুট নিবে। এরপর সে ভ্যালু 
ব্যাবহার করে টেক্সটের সাইজ পরিবর্তন করবে। আরেকটা নতুন জিনিস ট্রাই করতে পারো। টেক্সট গুলোর কালার 
পরিবর্তন করার চেষ্টা করে দেখতে পারো। এরজন্য ইনপুট এর type=”color” সম্পর্কে একটু জানতে হবে। 
*/