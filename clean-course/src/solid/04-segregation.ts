// Aplicanco SIP principio de segregación de interfaz
// Se refiere a que no exista una clase que implemente métodos de una interfaz, que luego no deba utilizar.
interface  Bird {
     eat(): void ;
}

interface  FlyingBird {
    fly(): void;
}

interface  SwimmerBird {
    swim(): void;
}

interface  RunnigBird {
    run(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly(){}
    public eat() {}
}

class Humminbird implements Bird, FlyingBird {
    public fly(){}
    public eat() {}
}

class Ostrich implements Bird, RunnigBird {
    public eat() {}
    public run(){}
}

class Pinguin implements Bird, SwimmerBird {
    public eat() {}
    public swim(){}
}