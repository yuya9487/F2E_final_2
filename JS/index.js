function ToNEWS(event){
    event.preventDefault();
    const target = document.getElementById('NEWSpart');
    target.ToNEWS({ behavior: 'smooth', block: 'start' });
  }