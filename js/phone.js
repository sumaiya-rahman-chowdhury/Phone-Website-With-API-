
const loadPhone = async (searchTxt) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchTxt}`);
    const data = await res.json();
    const phones = data.data ;
    console.log(phones)
    displayPhones(phones)
}
loadPhone()
const displayPhones = phones =>{
    console.log(phones);
    const phnContainer = document.getElementById('phn-contyner');
    phnContainer.textContent = " "
    phones.forEach(phone =>{
        console.log(phone);
        const phnCard = document.createElement('div');
        phnCard.classList = `card w-auto bg-base-100 shadow-xl` ;
        phnCard.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name
        }</h2>
        <p class="font-semibold">$300.00</p>
        <div class="card-actions">
          <button class="px-[22px] py-[8px] font-bold mt-4">Buy Now</button>
        </div>
      </div>
        `
        phnContainer.appendChild(phnCard);
    })
}




const handleSearch = () =>{
    // console.log("object")
    const srchField = document.getElementById('srch-field');
    const srchTxt = srchField.value ;
    console.log(srchTxt);
    loadPhone(srchTxt)
}