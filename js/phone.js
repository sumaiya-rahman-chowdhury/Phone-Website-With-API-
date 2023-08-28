
const loadPhone = async (searchTxt,isShhowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchTxt}`);
    const data = await res.json();
    const phones = data.data ;
    // console.log(phones)
    displayPhones(phones,isShhowAll)
}
loadPhone()
const displayPhones = (phones,isShhowAll) =>{
    // console.log(phones);
    const shwAll = document.getElementById('btn-show-all');
    const phnContainer = document.getElementById('phn-contyner');
    phnContainer.textContent = " "

    console.log(phones.length)
    if(phones.length>5 && !isShhowAll){
      shwAll.classList.remove('hidden');
    }
    else{
      shwAll.classList.add('hidden')
    }
    if(!isShhowAll){
      phones = phones.slice(0,5);
    }
    phones.forEach(phone =>{
        // console.log(phone);
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
          <button onclick="handleShowDetails('${phone.slug}')" class="px-[22px] py-[8px] font-bold mt-4 ">Show Details</button>
        </div>
      </div>
        `
        phnContainer.appendChild(phnCard);
    });

    toggleLoadingSpinner(false);
}
const handleShowDetails =async (id) =>{
  console.log(id);
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = res.json();
  console.log(data)
}



const handleSearch = (isShhowAll) =>{
    // console.log("object")
    toggleLoadingSpinner(true)
    const srchField = document.getElementById('srch-field');
    const srchTxt = srchField.value ;
    console.log(srchTxt);
    loadPhone(srchTxt,isShhowAll)
}
const toggleLoadingSpinner = (isLoading) =>{
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden');
  }
  else{
    loadingSpinner.classList.add('hidden')
  }
  
}


const handleShowAll = () =>{
  handleSearch(true);
}
