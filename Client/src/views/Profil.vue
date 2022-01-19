<template>
  <div class="container">

    <div class="bandeau">
      <h1>Profil</h1>
    </div>
    <div class="row">
      <div class="fiche col-sm">
            
            <h4> Informations personelles </h4>
              <hr></hr>
              <table >
                <tbody>
                  <tr>
                      <td>Prénom : </td>
                      <td>{data.prenom}</td>
                  </tr>
                  <tr>
                      <td>Nom : </td>
                      <td>{data.nom}</td>
                  </tr>
                  <tr>
                      <td>Age : </td>
                      <td>{data.age}</td>
                  </tr>
                  <tr>
                    <td>Adresse : </td>
                    <td>{data.adresse.rue}</td>
                  </tr>
                  <tr>
                    <td> </td>
                    <td>{data.adresse.ville}</td>
                  </tr>
                  <tr>
                    <td> </td>
                    <td>{data.adresse.cp}</td>
                  </tr>
                  <tr >
                      <td> </td>
                  </tr>
                                          
                </tbody>
              </table>
               <p style=" color:#D0364F; text-align:right">Modifier mes Informations</p>


          </div>
      </div>

      <div class="row">
          <div class="fiche col-sm" >
            <h4>Informations de compte</h4>              <hr></hr>
              <table>
                <tbody>
                  <tr>
                      <td>Email : </td>
                      <td>{}</td>
                  </tr>
                  <tr>
                      <td>Mot de passe : </td>
                      <td>{}</td>
                  </tr>
                   <tr >
                      <td> </td>
                  </tr>
                </tbody>
              </table>
                      <p style=" color:#D0364F; text-align:right">Modifier mes Informations</p>

            </div>
        </div>
    </div>

  </div>
</template>
