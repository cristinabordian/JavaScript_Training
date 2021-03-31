
10 == "10"  --> TRUE 10 egal cu 10 (compara ca valoare)
10 === "10" --> FALSE  10 nu este identic cu 10 (compara ca tip si valoare, trebuie ambele sa coincida )
0 == [] --> TRUE   (compara numar & array) 
0 == {} --> FALSE  (compara numar & object)
0 == ""  --> TRUE  (compara numar & text)

== este un egal foarte tolerant
=== este un egal strict, identic, doar daca coincide si valoare si tipul in ambele parti

SWITCH va face o comparatie stricta (===) dintre expresie si fiecare valoare