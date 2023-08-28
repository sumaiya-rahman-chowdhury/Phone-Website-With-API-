
const loadPhone = async (searchTxt='Iphone',isShhowAll) =>{
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

    // console.log(phones.length)
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
const handleShowDetails =async (id) =>{
  // console.log(id);
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data =await res.json();
  const phone = data.data ;
  console.log(phone)
  showPhoneDetails(phone)
}



const showPhoneDetails = (phone) =>{
  const phoneName = document.getElementById('phone-name');
 phoneName.innerText = phone.name ;
 const showDetailsCont = document.getElementById('show-details-container');
 showDetailsCont.innerHTML = `<div class=" flex flex-col items-center"><img src="${phone.image}" alt="" </div>
 <div class="mt-5"><p class="text-justify"><span class="font-bold">Storage: </span>${phone?.mainFeatures?.storage}</p>
 <p><span class="font-bold">Display Size: </span>${phone?.mainFeatures?.displaySize}</p>
 <p><span class="font-bold">ChipSet: </span>${phone?.mainFeatures?.chipSet}</p>
 <p><span class="font-bold">Slug: </span>${phone?.mainFeatures?.slug}</p>
 <p><span class="font-bold">Release Date: </span>${phone?.mainFeatures?.releaseDate}</p>
 <p><span class="font-bold">Brand: </span>${phone?.brand}</p>
 <p><span class="font-bold">GPS: </span>${phone?.GPS}</p></div>
 `
















  my_modal_5.showModal()
}
