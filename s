[33mcommit 590c924ea26b787e0ad5ada7fbf466e39cd55009[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mlogout[m[33m)[m
Author: Miguel Luiz Lima Nascimento <miguellima.nascimento.005@gmail.com>
Date:   Sun May 25 14:35:01 2025 -0300

    Correção do botão de visibilidade da senha

 package-lock.json                                  |  8 [32m++[m[31m--[m
 package.json                                       |  2 [32m+[m[31m-[m
 src/app/app.routes.ts                              | 10 [32m++[m[31m--[m
 .../password-input-layout.component.css            | 54 [32m++++[m[31m------------------[m
 .../password-input-layout.component.html           | 13 [32m++++[m[31m--[m
 .../password-input-layout.component.spec.ts        |  1 [31m-[m
 .../password-input-layout.component.ts             | 44 [32m++++++++++++++[m[31m----[m
 .../register-input-layout.component.html           |  8 [32m+++[m[31m-[m
 .../register-input-layout.component.ts             | 46 [32m+++++++++++++++[m[31m---[m
 src/app/pages/login/login.component.css            | 25 [32m++++++[m[31m----[m
 src/app/pages/login/login.component.html           | 39 [32m++++++++++++[m[31m----[m
 src/app/pages/login/login.component.ts             | 32 [32m+++++++++++[m[31m--[m
 12 files changed, 183 insertions(+), 99 deletions(-)

[33mcommit b4d659d1afe102a5f02bad1b8550cc8a76647625[m[33m ([m[1;31morigin/logout[m[33m)[m
Author: Miguel Luiz Lima Nascimento <miguellima.nascimento.005@gmail.com>
Date:   Sat May 10 21:53:12 2025 -0300

    Adição da página de logout com redirecionamento para a página de login e algumas alterações visuais

 src/app/admin/components/table/table.component.css |   7 [32m++[m
 .../admin/components/table/table.component.html    |   4 [32m+[m[31m-[m
 .../pages/home-admin/home-admin.component.css      |   9 [32m+[m[31m-[m
 .../pages/home-admin/home-admin.component.html     |   4 [32m+[m[31m-[m
 .../log-out-admin/log-out-admin.component.css      | 108 [32m++++++++++++++++++[m[31m---[m
 .../log-out-admin/log-out-admin.component.html     |  17 [32m+++[m[31m-[m
 .../pages/log-out-admin/log-out-admin.component.ts |  13 [32m++[m[31m-[m
 .../black-square-button.component.css              |  48 [32m+++++++[m[31m--[m
 src/app/components/footer/footer.component.css     |  91 [32m++++++++++++[m[31m-----[m
 src/app/components/footer/footer.component.html    |  33 [32m++++[m[31m---[m
 src/app/components/header/header.component.css     | 104 [32m++++++++++++[m[31m--------[m
 src/app/components/header/header.component.html    |  26 [32m++[m[31m---[m
 .../list-products/list-products.component.css      |  49 [32m++++++++[m[31m--[m
 .../list-products/list-products.component.html     |  18 [32m++[m[31m--[m
 src/app/components/logo/logo.component.css         |  15 [32m++[m[31m-[m
 src/app/pages/home/home.component.css              |  14 [32m++[m[31m-[m
 16 files changed, 404 insertions(+), 156 deletions(-)

[33mcommit 2b4c5b8e9118046dab84291c6f02e99da9e8aa8a[m[33m ([m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: Nicole <nicolelinscoelho@gmail.com>
Date:   Wed Apr 9 22:00:55 2025 -0300

    Pagina de logout admin inicio

 .../log-out-admin/log-out-admin.component.css      | 32 [32m++++++++++++++++++++++[m
 .../log-out-admin/log-out-admin.component.html     | 21 [32m+++++++++++++[m[31m-[m
 .../pages/log-out-admin/log-out-admin.component.ts |  3 [32m+[m[31m-[m
 3 files changed, 54 insertions(+), 2 deletions(-)

[33mcommit 46fb37e295c700128d2f90c80dbcd78bd8687b37[m
Author: Nicole <nicolelinscoelho@gmail.com>
Date:   Wed Apr 9 21:46:08 2025 -0300

    Pagina de notificações e componentes dependentes feitos

 .../notifications/notifications.component.css      | 89 [32m++++++++++++++++++++++[m
 .../notifications/notifications.component.html     | 20 [32m+++++[m
 .../notifications/notifications.component.spec.ts  | 23 [32m++++++[m
 .../notifications/notifications.component.ts       | 14 [32m++++[m
 src/app/admin/components/table/table.component.css |  6 [32m+[m[31m-[m
 .../notification-admin.component.css               |  9 [32m+++[m
 .../notification-admin.component.html              | 38 [32m++++++++[m[31m-[m
 .../notification-admin.component.ts                |  3 [32m+[m[31m-[m
 src/styles.css                                     | 28 [32m+++++++[m
 9 files changed, 226 insertions(+), 4 deletions(-)

[33mcommit d762412ff73b210b18405accc3de06ca1a884389[m
Author: Nicole Lins <nicolelinscoelho@gmail.com>
Date:   Sun Apr 6 04:59:27 2025 -0300

    Estrutura base dos modais criada

 .../button-action/button-action.component.css      |  9 [32m+++[m[31m--[m
 .../button-action/button-action.component.html     |  4 [32m+[m[31m-[m
 .../button-action/button-action.component.ts       |  1 [31m-[m
 .../input-info-products.component.css              | 26 [32m+++++++++++++[m
 .../input-info-products.component.html             |  8 [32m++++[m
 .../input-info-products.component.spec.ts          | 23 [32m+++++++++++[m
 .../input-info-products.component.ts               | 15 [32m++++++++[m
 .../confirm-action/confirm-action.component.css    | 11 [32m++++++[m
 .../confirm-action/confirm-action.component.html   | 17 [32m+++++++++[m
 .../confirm-action.component.spec.ts               | 23 [32m+++++++++++[m
 .../confirm-action/confirm-action.component.ts     | 26 [32m+++++++++++++[m
 .../modals/info-product/info-product.component.css | 44 [32m++++++++++++++++++++++[m
 .../info-product/info-product.component.html       | 28 [32m++++++++++++++[m
 .../info-product/info-product.component.spec.ts    | 23 [32m+++++++++++[m
 .../modals/info-product/info-product.component.ts  | 27 [32m+++++++++++++[m
 src/app/admin/components/modals/modals.styles.css  | 28 [32m++++++++++++++[m
 src/app/admin/components/table/table.component.css |  5 [32m+++[m
 .../admin/components/table/table.component.html    | 27 [32m++++++++++[m[31m---[m
 src/app/admin/components/table/table.component.ts  | 22 [32m++++++++++[m[31m-[m
 .../text-area-info-products.component.css          | 26 [32m+++++++++++++[m
 .../text-area-info-products.component.html         |  8 [32m++++[m
 .../text-area-info-products.component.spec.ts      | 23 [32m+++++++++++[m
 .../text-area-info-products.component.ts           | 14 [32m+++++++[m
 .../log-out-admin/log-out-admin.component.html     |  2 [32m+[m[31m-[m
 24 files changed, 427 insertions(+), 13 deletions(-)

[33mcommit a12acc320de74d352ad860934d3d7a66552b9423[m
Author: Nicole Lins <nicolelinscoelho@gmail.com>
Date:   Sun Apr 6 01:53:52 2025 -0300

    Conflitos arrumados

 .../admin/pages/home-admin/home-admin.component.ts |  4 [32m+[m[31m---[m
 .../logo-simples/logo-simples.component.css        |  0
 .../logo-simples/logo-simples.component.html       |  1 [31m-[m
 .../logo-simples/logo-simples.component.spec.ts    | 23 [31m----------------------[m
 .../logo-simples/logo-simples.component.ts         | 11 [31m-----------[m
 src/app/pages/cart/cart.component.ts               |  4 [32m+[m[31m---[m
 6 files changed, 2 insertions(+), 41 deletions(-)

[33mcommit e2ec3efa77ec727e69204f627d39857bc0923e79[m
Author: Nicole Lins <nicolelinscoelho@gmail.com>
Date:   Sat Apr 5 03:27:59 2025 -0300

    Pagina inicial do Admin criada

 src/app/admin/admin.component.html                 |   4 [32m+[m[31m-[m
 src/app/admin/admin.component.ts                   |   4 [32m+[m[31m-[m
 src/app/admin/components/table/table.component.css |  82 [32m+++++++++[m
 .../admin/components/table/table.component.html    | 191 [32m+++++++++++++++++++++[m
 .../admin/components/table/table.component.spec.ts |  23 [32m+++[m
 src/app/admin/components/table/table.component.ts  |  11 [32m++[m
 .../pages/home-admin/home-admin.component.css      |  55 [32m+++[m[31m---[m
 .../pages/home-admin/home-admin.component.html     |  41 [32m+[m[31m----[m
 .../admin/pages/home-admin/home-admin.component.ts |   3 [32m+[m[31m-[m
 .../log-out-admin/log-out-admin.component.html     |   4 [32m+[m[31m-[m
 .../pages/log-out-admin/log-out-admin.component.ts |   3 [32m+[m[31m-[m
 .../notification-admin.component.html              |   4 [32m+[m[31m-[m
 .../notification-admin.component.ts                |   3 [32m+[m[31m-[m
 src/app/app.routes.ts                              |   3 [32m+[m[31m-[m
 14 files changed, 357 insertions(+), 74 deletions(-)

[33mcommit cf84696d8c8701043bb54e104e25be33a2c6e1af[m
Author: Nicole <nicolelinscoelho@gmail.com>
Date:   Wed Apr 2 22:09:28 2025 -0300

    Pagina de manutenção iniciada

 .../button-action/button-action.component.css      |  25 [32m++++[m
 .../button-action/button-action.component.html     |   1 [32m+[m
 .../button-action/button-action.component.spec.ts  |  23 [32m++++[m
 .../button-action/button-action.component.ts       |  12 [32m++[m
 .../pages/home-admin/home-admin.component.css      | 144 [32m+++++++++++++++++++++[m
 .../pages/home-admin/home-admin.component.html     |  67 [32m+++++++++[m[31m-[m
 .../admin/pages/home-admin/home-admin.component.ts |   8 [32m+[m[31m-[m
 7 files changed, 276 insertions(+), 4 deletions(-)

[33mcommit 5eece23bcb42c497e05376ffc9686ed5a066b568[m
Author: Nicole <nicolelinscoelho@gmail.com>
Date:   Wed Apr 2 20:33:09 2025 -0300

    Criação das paginas do admin

 src/app/admin/admin.component.css                  |  0
 src/app/admin/admin.component.html                 |  1 [32m+[m
 src/app/admin/admin.component.spec.ts              | 23 [32m++++++++++++++++++++++[m
 src/app/admin/admin.component.ts                   | 11 [32m+++++++++++[m
 .../admin-layout/admin-layout.component.css        | 20 [32m+++++++++++++++++++[m
 .../admin-layout/admin-layout.component.html       |  7 [32m+++++++[m
 .../admin-layout/admin-layout.component.spec.ts    | 23 [32m++++++++++++++++++++++[m
 .../admin-layout/admin-layout.component.ts         | 12 [32m+++++++++++[m
 .../navegation-button.component.css                | 19 [32m++++++++++++++++++[m
 .../navegation-button.component.html               |  1 [32m+[m
 .../navegation-button.component.spec.ts            | 23 [32m++++++++++++++++++++++[m
 .../navegation-button.component.ts                 | 11 [32m+++++++++++[m
 .../components/navegation/navegation.component.css | 16 [32m+++++++++++++++[m
 .../navegation/navegation.component.html           | 10 [32m++++++++++[m
 .../navegation/navegation.component.spec.ts        | 23 [32m++++++++++++++++++++++[m
 .../components/navegation/navegation.component.ts  | 14 [32m+++++++++++++[m
 .../pages/home-admin/home-admin.component.css      |  0
 .../pages/home-admin/home-admin.component.html     |  3 [32m+++[m
 .../pages/home-admin/home-admin.component.spec.ts  | 23 [32m++++++++++++++++++++++[m
 .../admin/pages/home-admin/home-admin.component.ts | 13 [32m++++++++++++[m
 .../log-out-admin/log-out-admin.component.css      |  0
 .../log-out-admin/log-out-admin.component.html     |  1 [32m+[m
 .../log-out-admin/log-out-admin.component.spec.ts  | 23 [32m++++++++++++++++++++++[m
 .../pages/log-out-admin/log-out-admin.component.ts | 11 [32m+++++++++++[m
 .../notification-admin.component.css               |  0
 .../notification-admin.component.html              |  1 [32m+[m
 .../notification-admin.component.spec.ts           | 23 [32m++++++++++++++++++++++[m
 .../notification-admin.component.ts                | 11 [32m+++++++++++[m
 src/app/app.routes.ts                              | 19 [32m++++++++++++++++++[m
 .../logo-simples/logo-simples.component.css        |  0
 .../logo-simples/logo-simples.component.html       |  1 [32m+[m
 .../logo-simples/logo-simples.component.spec.ts    | 23 [32m++++++++++++++++++++++[m
 .../logo-simples/logo-simples.component.ts         | 11 [32m+++++++++++[m
 src/app/components/footer/footer.component.html    |  3 [32m++[m[31m-[m
 src/app/components/header/header.component.html    |  2 [32m+[m[31m-[m
 src/app/components/logo/logo.component.html        |  2 [32m+[m[31m-[m
 src/app/components/logo/logo.component.ts          |  4 [32m++[m[31m--[m
 src/assets/images/LOGOLOGO.svg                     | 13 [32m+++++++[m[31m-----[m
 src/styles.css                                     |  2 [32m++[m
 39 files changed, 393 insertions(+), 10 deletions(-)

[33mcommit 7a8b730adfecd4a6445876f094ad5bdcdfeb88f2[m
Author: Nicole Lins <nicolelinscoelho@gmail.com>
Date:   Mon Mar 31 03:29:20 2025 -0300

    favicon da logologo adicionado

 src/assets/images/logo-icon.svg | 6 [32m++++++[m
 src/index.html                  | 2 [32m+[m[31m-[m
 2 files changed, 7 insertions(+), 1 deletion(-)

[33mcommit bb0ca3b407f328d94d0d6667d6b2572c8ecb5e88[m
Author: Nicole Lins <nicolelinscoelho@gmail.com>
Date:   Mon Mar 31 03:24:09 2025 -0300

    site parcialmente feito

 src/app/app.routes.ts                              |  46 [32m+++++[m
 .../black-round-button.component.css               |   6 [32m+[m[31m-[m
 .../black-round-button.component.html              |   2 [32m+[m[31m-[m
 .../black-round-button.component.ts                |   1 [32m+[m
 src/app/components/carosel/carosel.component.css   |   3 [32m+[m
 src/app/components/carosel/carosel.component.html  |   2 [32m+[m[31m-[m
 src/app/components/carosel/carosel.component.ts    |   3 [32m+[m[31m-[m
 src/app/components/footer/footer.component.css     |  30 [32m+++[m[31m-[m
 src/app/components/footer/footer.component.html    |  18 [32m+[m[31m-[m
 src/app/components/footer/footer.component.ts      |   3 [32m+[m[31m-[m
 .../list-products/list-products.component.html     |  12 [32m+[m[31m-[m
 .../list-products/list-products.component.ts       |   3 [32m+[m[31m-[m
 .../password-input-layout.component.css            |   4 [32m+[m
 .../product-box/product-box.component.html         |   2 [32m+[m[31m-[m
 .../product-box/product-box.component.ts           |   2 [32m+[m[31m-[m
 .../under-constructions.component.css              |  17 [32m++[m
 .../under-constructions.component.html             |  12 [32m++[m
 .../under-constructions.component.spec.ts          |  23 [32m+++[m
 .../under-constructions.component.ts               |  15 [32m++[m
 src/app/pages/acessorios/acessorios.component.css  |   0
 src/app/pages/acessorios/acessorios.component.html |   1 [32m+[m
 .../pages/acessorios/acessorios.component.spec.ts  |  23 [32m+++[m
 src/app/pages/acessorios/acessorios.component.ts   |  12 [32m++[m
 src/app/pages/calcados/calcados.component.css      |   0
 src/app/pages/calcados/calcados.component.html     |   1 [32m+[m
 src/app/pages/calcados/calcados.component.spec.ts  |  23 [32m+++[m
 src/app/pages/calcados/calcados.component.ts       |  12 [32m++[m
 src/app/pages/cart/cart.component.html             |  10 [32m+[m[31m-[m
 src/app/pages/cart/cart.component.ts               |   5 [32m+[m[31m-[m
 src/app/pages/error-page/error-page.component.css  |   9 [32m+[m
 src/app/pages/error-page/error-page.component.html |  13 [32m++[m
 .../pages/error-page/error-page.component.spec.ts  |  23 [32m+++[m
 src/app/pages/error-page/error-page.component.ts   |  15 [32m++[m
 src/app/pages/feminino/feminino.component.css      |   0
 src/app/pages/feminino/feminino.component.html     |   1 [32m+[m
 src/app/pages/feminino/feminino.component.spec.ts  |  23 [32m+++[m
 src/app/pages/feminino/feminino.component.ts       |  12 [32m++[m
 src/app/pages/home/home.component.html             |  12 [32m+[m[31m-[m
 src/app/pages/infantil/infantil.component.css      |   0
 src/app/pages/infantil/infantil.component.html     |   1 [32m+[m
 src/app/pages/infantil/infantil.component.spec.ts  |  23 [32m+++[m
 src/app/pages/infantil/infantil.component.ts       |  12 [32m++[m
 src/app/pages/login/login.component.css            |   2 [32m+[m[31m-[m
 src/app/pages/masculino/masculino.component.css    |   0
 src/app/pages/masculino/masculino.component.html   |   1 [32m+[m
 .../pages/masculino/masculino.component.spec.ts    |  23 [32m+++[m
 src/app/pages/masculino/masculino.component.ts     |  12 [32m++[m
 src/app/pages/news/news.component.css              |  13 [32m++[m
 src/app/pages/news/news.component.html             |  21 [32m+++[m
 src/app/pages/news/news.component.ts               |   4 [32m+[m[31m-[m
 src/app/pages/singup/singup.component.css          |   2 [32m+[m[31m-[m
 src/app/pages/singup/singup.component.html         |   1 [31m-[m
 src/assets/images/error-page-user.svg              | 197 [32m+++++++++++++++++++++[m
 src/assets/images/under-constructions-image.svg    |  86 [32m+++++++++[m
 54 files changed, 742 insertions(+), 55 deletions(-)

[33mcommit 4e0b8fea3f6375c11016c206ba5baff339d3f229[m
Author: Nicole <nicolelinscoelho@gmail.com>
Date:   Fri Mar 28 21:16:51 2025 -0300

    Carrossel adicionado e refinação de componentes

 angular.json                                       |  11 [32m++++++[m[31m--[m
 package-lock.json                                  |  31 [32m+++++++++++++++++++++[m
 package.json                                       |   1 [32m+[m
 src/app/components/carosel/carosel.component.css   |   0
 src/app/components/carosel/carosel.component.html  |  26 [32m+++++++++++++++++[m
 .../components/carosel/carosel.component.spec.ts   |  23 [32m+++++++++++++++[m
 src/app/components/carosel/carosel.component.ts    |  11 [32m++++++++[m
 src/app/components/footer/footer.component.css     |   2 [32m+[m[31m-[m
 src/app/components/header/header.component.css     |  27 [32m+++++++++++[m[31m-------[m
 .../list-products/list-products.component.css      |   4 [32m+++[m
 src/app/components/logo/logo.component.css         |  15 [32m+++[m[31m-------[m
 src/app/pages/cart/cart.component.html             |   2 [32m++[m
 src/app/pages/cart/cart.component.ts               |  11 [32m++[m[31m------[m
 src/app/pages/home/home.component.css              |   4 [32m+[m[31m--[m
 src/app/pages/home/home.component.html             |   4 [32m++[m[31m-[m
 src/app/pages/home/home.component.ts               |   3 [32m+[m[31m-[m
 src/assets/images/CARROSSEL.png                    | Bin [31m0[m -> [32m349141[m bytes
 src/assets/images/CARROSSEL1.png                   | Bin [31m0[m -> [32m347550[m bytes
 src/styles.css                                     |   1 [32m+[m
 19 files changed, 139 insertions(+), 37 deletions(-)

[33mcommit 609d0fe0d58a811126785acd740387565f4b1bf2[m
Author: Nicole Lins <nicolelinscoelho@gmail.com>
Date:   Fri Mar 28 16:08:29 2025 -0300

    Atualizações nos componentes e páginas

 src/app/app.routes.ts                              |  16 [32m+[m[31m-[m
 src/app/components/footer/footer.component.html    |   1 [32m+[m
 src/app/components/footer/footer.component.ts      |   3 [32m+[m[31m-[m
 src/app/components/header/header.component.css     |   2 [32m+[m[31m-[m
 src/app/components/header/header.component.html    |   5 [32m+[m[31m-[m
 src/app/components/header/header.component.ts      |   3 [32m+[m[31m-[m
 src/app/components/logo/logo.component.css         |  17 [32m+[m
 src/app/components/logo/logo.component.html        |   4 [32m+[m
 src/app/components/logo/logo.component.spec.ts     |  23 [32m+[m
 src/app/components/logo/logo.component.ts          |  12 [32m+[m
 .../password-input-layout.component.css            |   4 [32m+[m[31m-[m
 .../register-input-layout.component.css            |   2 [32m+[m[31m-[m
 src/app/pages/cart/cart.component.html             |  26 [32m+[m[31m-[m
 src/app/pages/cart/cart.component.ts               |   3 [32m+[m[31m-[m
 src/app/pages/home/home.component.html             |  34 [32m+[m[31m-[m
 src/app/pages/home/home.component.ts               |   3 [32m+[m[31m-[m
 src/app/pages/login/login.component.css            |  73 [32m++[m
 src/app/pages/login/login.component.html           |  36 [32m+[m[31m-[m
 src/app/pages/login/login.component.ts             |   6 [32m+[m[31m-[m
 src/app/pages/news/news.component.css              |   0
 src/app/pages/news/news.component.html             |   7 [32m+[m
 src/app/pages/news/news.component.spec.ts          |  23 [32m+[m
 src/app/pages/news/news.component.ts               |  13 [32m+[m
 src/app/pages/singup/singup.component.css          |  67 [32m++[m
 src/app/pages/singup/singup.component.html         |  38 [32m+[m
 src/app/pages/singup/singup.component.spec.ts      |  23 [32m+[m
 src/app/pages/singup/singup.component.ts           |  15 [32m+[m
 src/assets/images/background-dark.svg              | 938 [32m+++++++++++++++++++++[m
 src/assets/images/background-light.svg             | 158 [32m++++[m
 29 files changed, 1500 insertions(+), 55 deletions(-)

[33mcommit 106ef2ee08af4bf421634d5eb8bc1d5702efd867[m
Merge: 8533065 c00e82e
Author: Nicole Lins <nicolelinscoelho@gmail.com>
Date:   Fri Mar 28 16:07:12 2025 -0300

    Resolvido conflito no README.md

[33mcommit 853306522303384dbb347a88df276f0000c47e55[m
Author: Nicole Lins <nicolelinscoelho@gmail.com>
Date:   Fri Mar 28 12:32:11 2025 -0300

    Componentes criados

 angular.json                                       |  12 [32m+[m[31m-[m
 package-lock.json                                  |  22 [32m++[m
 package.json                                       |   2 [32m+[m
 src/app/app.component.html                         | 335 [31m---------------------[m
 src/app/app.routes.ts                              |  21 [32m+[m[31m-[m
 .../address-settings-layout.component.css          |   6 [32m+[m
 .../address-settings-layout.component.html         |   9 [32m+[m
 .../address-settings-layout.component.spec.ts      |  23 [32m++[m
 .../address-settings-layout.component.ts           |  18 [32m++[m
 .../black-round-button.component.css               |  20 [32m++[m
 .../black-round-button.component.html              |   1 [32m+[m
 .../black-round-button.component.spec.ts           |  23 [32m++[m
 .../black-round-button.component.ts                |  11 [32m+[m
 .../black-square-button.component.css              |  20 [32m++[m
 .../black-square-button.component.html             |   1 [32m+[m
 .../black-square-button.component.spec.ts          |  23 [32m++[m
 .../black-square-button.component.ts               |  11 [32m+[m
 .../orange-round-button.component.css              |  20 [32m++[m
 .../orange-round-button.component.html             |   1 [32m+[m
 .../orange-round-button.component.spec.ts          |  23 [32m++[m
 .../orange-round-button.component.ts               |  11 [32m+[m
 .../orange-square-button.component.css             |  41 [32m+++[m
 .../orange-square-button.component.html            |   1 [32m+[m
 .../orange-square-button.component.spec.ts         |  23 [32m++[m
 .../orange-square-button.component.ts              |  12 [32m+[m
 .../white-round-button.component.css               |  14 [32m+[m
 .../white-round-button.component.html              |   1 [32m+[m
 .../white-round-button.component.spec.ts           |  23 [32m++[m
 .../white-round-button.component.ts                |  11 [32m+[m
 .../card-settings-layout.component.css             |  16 [32m+[m
 .../card-settings-layout.component.html            |  13 [32m+[m
 .../card-settings-layout.component.spec.ts         |  23 [32m++[m
 .../card-settings-layout.component.ts              |  17 [32m++[m
 src/app/components/footer/footer.component.css     |  41 [32m+++[m
 src/app/components/footer/footer.component.html    |  20 [32m++[m
 src/app/components/footer/footer.component.spec.ts |  23 [32m++[m
 src/app/components/footer/footer.component.ts      |  11 [32m+[m
 src/app/components/header/header.component.css     |  65 [32m++++[m
 src/app/components/header/header.component.html    |  17 [32m++[m
 src/app/components/header/header.component.spec.ts |  23 [32m++[m
 src/app/components/header/header.component.ts      |  12 [32m+[m
 .../list-products/list-products.component.css      |  20 [32m++[m
 .../list-products/list-products.component.html     |   8 [32m+[m
 .../list-products/list-products.component.spec.ts  |  23 [32m++[m
 .../list-products/list-products.component.ts       |  11 [32m+[m
 .../password-input-layout.component.css            |  73 [32m+++++[m
 .../password-input-layout.component.html           |   7 [32m+[m
 .../password-input-layout.component.spec.ts        |  23 [32m++[m
 .../password-input-layout.component.ts             |  13 [32m+[m
 .../product-box/product-box.component.css          |  39 [32m+++[m
 .../product-box/product-box.component.html         |  21 [32m++[m
 .../product-box/product-box.component.spec.ts      |  23 [32m++[m
 .../product-box/product-box.component.ts           |  13 [32m+[m
 .../profile-settings-layout.component.css          |  27 [32m++[m
 .../profile-settings-layout.component.html         |   8 [32m+[m
 .../profile-settings-layout.component.spec.ts      |  23 [32m++[m
 .../profile-settings-layout.component.ts           |  14 [32m+[m
 .../register-input-layout.component.css            |  37 [32m+++[m
 .../register-input-layout.component.html           |   4 [32m+[m
 .../register-input-layout.component.spec.ts        |  23 [32m++[m
 .../register-input-layout.component.ts             |  13 [32m+[m
 src/app/pages/cart/cart.component.css              |   4 [32m+[m
 src/app/pages/cart/cart.component.html             |  25 [32m++[m
 src/app/pages/cart/cart.component.spec.ts          |  23 [32m++[m
 src/app/pages/cart/cart.component.ts               |  20 [32m++[m
 src/app/pages/home/home.component.css              |  19 [32m++[m
 src/app/pages/home/home.component.html             |  24 [32m++[m
 src/app/pages/home/home.component.spec.ts          |  23 [32m++[m
 src/app/pages/home/home.component.ts               |  17 [32m++[m
 src/app/pages/login/login.component.css            |   0
 src/app/pages/login/login.component.html           |   1 [32m+[m
 src/app/pages/login/login.component.spec.ts        |  23 [32m++[m
 src/app/pages/login/login.component.ts             |  11 [32m+[m
 src/assets/images/LOGOLOGO.svg                     |   6 [32m+[m
 src/assets/images/MasterCard.svg                   |   6 [32m+[m
 src/assets/images/camisa1.png                      | Bin [31m0[m -> [32m80695[m bytes
 src/assets/images/camisa2.png                      | Bin [31m0[m -> [32m67742[m bytes
 src/assets/images/shorts1.png                      | Bin [31m0[m -> [32m56430[m bytes
 src/index.html                                     |   2 [32m+[m[31m-[m
 src/styles.css                                     |  51 [32m+++[m[31m-[m
 80 files changed, 1352 insertions(+), 346 deletions(-)

[33mcommit c00e82e144b668343b7d01acde85a535bc65d21e[m
Author: Nicole Lins Coelho <90219522+Elociny@users.noreply.github.com>
Date:   Fri Mar 28 12:29:29 2025 -0300

    Initial commit

 LICENSE   | 21 [32m+++++++++++++++++++++[m
 README.md |  1 [32m+[m
 2 files changed, 22 insertions(+)

[33mcommit fd2199acdf0b38ef6debcc62f753c8a56746d724[m
Author: Nicole Lins <nicolelinscoelho@gmail.com>
Date:   Wed Mar 26 05:13:21 2025 -0300

    initial commit

 .editorconfig                 |    17 [32m+[m
 .gitignore                    |    42 [32m+[m
 .vscode/extensions.json       |     4 [32m+[m
 .vscode/launch.json           |    20 [32m+[m
 .vscode/tasks.json            |    42 [32m+[m
 README.md                     |    59 [32m+[m
 angular.json                  |    96 [32m+[m
 package-lock.json             | 14519 [32m++++++++++++++++++++++++++++++++++++++++[m
 package.json                  |    37 [32m+[m
 public/favicon.ico            |   Bin [31m0[m -> [32m15086[m bytes
 src/app/app.component.css     |     0
 src/app/app.component.html    |   336 [32m+[m
 src/app/app.component.spec.ts |    29 [32m+[m
 src/app/app.component.ts      |    12 [32m+[m
 src/app/app.config.ts         |     8 [32m+[m
 src/app/app.routes.ts         |     3 [32m+[m
 src/index.html                |    13 [32m+[m
 src/main.ts                   |     6 [32m+[m
 src/styles.css                |     1 [32m+[m
 tsconfig.app.json             |    15 [32m+[m
 tsconfig.json                 |    27 [32m+[m
 tsconfig.spec.json            |    15 [32m+[m
 22 files changed, 15301 insertions(+)
