const tablesDiv = document.querySelector("#tables");
const waitlistDiv = document.querySelector("#waitlist");

fetch("/api/tables").then(res=>{
    return res.json()
}).then(data=>{
    console.log(data)
    data.forEach(customer=>{
        const customerCard = document.createElement("div");
        customerCard.setAttribute("class","card");

        const cardHeader = document.createElement("h3");
        cardHeader.textContent = `id:${customer.id} name:${customer.name}`
        customerCard.append(cardHeader);

        const cardContact = document.createElement("h5");
        cardContact.textContent = `phone:${customer.phone} email:${customer.email}`
        customerCard.append(cardContact);

        tablesDiv.append(customerCard);
    })
})

fetch("/api/waitlist").then(res=>{
    return res.json()
}).then(data=>{
    console.log(data)
    data.forEach(customer=>{
        const customerCard = document.createElement("div");
        customerCard.setAttribute("class","card");

        const cardHeader = document.createElement("h3");
        cardHeader.textContent = `id:${customer.id} name:${customer.name}`
        customerCard.append(cardHeader);

        const cardContact = document.createElement("h5");
        cardContact.textContent = `phone:${customer.phone} email:${customer.email}`
        customerCard.append(cardContact);

        waitlistDiv.append(customerCard);
    })
})