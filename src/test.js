function da() {
    return (
      <div>
        <h1>Salut lume!</h1>
        <div>
          Click me
          <button onClick={() => {
            const c = prompt('Vrei sa fii sotia mea?');
            if (c === 'da' || c === 'DA' || c === 'Da' || c === 'YES') {
              alert('Ai ales varianta corecta');
            } else {
              alert('Nu ai ales varianta corecta');
            }
          }}>Click me</button>
        </div>
      </div>
    );
  }
  
  export default da;