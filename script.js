const listings = [

    {
      title: "Downtown Furnished Studio",
      price: "$950/month",
      furnished: "furnished",
      wifi: "Included",
      parking: "Available",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
  
    {
      title: "Student Apartment",
      price: "$700/month",
      furnished: "unfurnished",
      wifi: "Included",
      parking: "Street Parking",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156"
    },
  
    {
      title: "Intern Housing Loft",
      price: "$1100/month",
      furnished: "furnished",
      wifi: "High-Speed",
      parking: "Garage",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    }
  
  ];
  
  function displayListings(data) {
  
    const container =
      document.getElementById("listingContainer");
  
    container.innerHTML = "";
  
    data.forEach(listing => {
  
      container.innerHTML += `
  
        <div class="card">
  
          <img src="${listing.image}" alt="${listing.title}">
  
          <div class="card-content">
  
            <h2>${listing.title}</h2>
  
            <p><strong>Price:</strong> ${listing.price}</p>
  
            <p><strong>Wi-Fi:</strong> ${listing.wifi}</p>
  
            <p><strong>Parking:</strong> ${listing.parking}</p>
  
            <span class="tag">
              ${listing.furnished}
            </span>
  
          </div>
  
        </div>
  
      `;
    });
  }
  
  function filterListings() {
  
    const filter =
      document.getElementById("furnishedFilter").value;
  
    if (filter === "all") {
  
      displayListings(listings);
  
    } else {
  
      const filteredListings =
        listings.filter(listing =>
          listing.furnished === filter
        );
  
      displayListings(filteredListings);
    }
  }
  
  displayListings(listings);