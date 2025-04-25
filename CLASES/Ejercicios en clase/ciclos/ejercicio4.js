/*  3. Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use
funciones.*/

function promedioNotas (n1, n2 ,n3){
    return (n1 + n2 + n3)/ 3;
}

function promedioNotasEstudiantes (n){
    for(let i = 1; i <= n; i++){
        let nota1 = Math.floor(Math.random() * 5)+1;
        let nota2 = Math.floor(Math.random() * 5)+1;
        let nota3 = Math.floor(Math.random() * 5)+1;
        console.log(`El promedio de las notas del estudiante ${i} es: ${promedioNotas(nota1, nota2, nota3)}`);
    }
}

