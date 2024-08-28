const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 31 },
    { nombre: 'Carlos', edad: 35 },
    { nombre: 'Ana', edad: 22 }
  ];
  
  const personaMayorDeTreinta = personas.find(persona => persona.edad > 30);
  
  console.log(personaMayorDeTreinta); 
  
  