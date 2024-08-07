(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductService {
         getProduct(id: number) {
            console.log('Producto: ', {id, name: 'OLED Tv'});
        }
        saveProduct(product: Product) {
            console.log('Guardando en base de datos', product);
        }

    }

    class Mailer {
        private masterEmail: string = 'clara@clara.com';

        sendEmail(emailList : string[], template:'to-clients'|'to-admins') {
            console.log('Enviando correo a los '+ template + emailList[0]);
        }
    }

    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct(id: number) {
            this.productService.getProduct(id);
        }

        saveProduct(product: Product) {
            console.log('Guardando en base de datos', product);
        }

        notifyClients() {
            this.mailer.sendEmail(['nico@jconte.com'], "to-clients");
        }
    }


    class CarBloc {
        addToCart(productId: number) {
            console.log('Agregando al carrito ', productId);
        }
    }

    const mailer = new Mailer();
    const productService = new ProductService();
    const productBloc = new ProductBloc(productService, mailer);
    const carBloc = new CarBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({id: 10, name: 'OLED TV'});
    carBloc.addToCart(10);
    productBloc.notifyClients();
})();