import { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="w-full h-[150vh] bg-red-400"></div>

      <button
        className="text-white bg-black rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        onClick={() => setShow(true)}
      >
        Modal Toogle
      </button>

      <Modal show={show} onClose={() => setShow(false)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum. Perspiciatis Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
        vel sint commodi repudiandae consequuntur voluptatum laborum numquam
        blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.
        Veritatis obcaecati tenetur iure eius earum ut molestias architecto
        voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit
        sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
        aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
        laudantium molestias eos sapiente officiis modi at sunt excepturi
        expedita sint? Sed quibusdam recusandae alias error harum maxime
        adipisci amet laborum. Perspiciatis Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint
        commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
        harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque
        rerum! Provident similique accusantium nemo autem. Veritatis obcaecati
        tenetur iure eius earum ut molestias architecto voluptate aliquam nihil,
        eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
      </Modal>
    </>
  );
};

export default App;
