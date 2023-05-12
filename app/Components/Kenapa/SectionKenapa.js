import Button from "../Button";
import Container from "../Container";
import SubTitleSection from "../SubTitleSection";
import TextSection from "../TextSection";
import TitleSection from "../TitleSection";
import ArrowRight from "./ArrowRight";
import CardKenapa from "./CardKenapa";
import Kenapa1 from "./Icon/kenapa-1";
import Kenapa2 from "./Icon/kenapa-2";
import Kenapa3 from "./Icon/kenapa-3";
import Kenapa4 from "./Icon/kenapa-4";

export default function SectionKenapa() {
  return (
    <section className="pt-[100px] mt-20 " id="reasons">
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-5/12">
            <TitleSection color="primary">kenapa sih?</TitleSection>
            <SubTitleSection color="dark" margin="10px 0 20px 0">
              Kenapa Kami Tidak Memberikan Insight Apapun?
            </SubTitleSection>
            <TextSection color="secondary">
              Di sini kita akan klarifikasi mengapa kita tidak memberikan
              insight apapun di tool ini kepada kamu. Pada dasarnya hal ini kami
              lakukan semata-mata ingin menyelamatkan planet bumi.
            </TextSection>
            <div className="mt-[50px]">
              <Button variant="large-dark">
                <div className="flex items-center gap-4">
                  Pelajari Lebih Lanjut
                  <ArrowRight />
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap w-6/12 gap-[1px]">
            <CardKenapa
              icon={<Kenapa1 />}
              title="Database"
              desc="Data insight yang banyak kan bakal disimpen di database, ya kalo datanya banyak kan jadi gede juga size database-nya."
            />
            <CardKenapa
              icon={<Kenapa2 />}
              title="Server"
              desc="Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh listrik! "
            />
            <CardKenapa
              icon={<Kenapa3 />}
              title="Listrik"
              desc="Biaya listrik mahal, bos! Listrik kita ini masih batu bara, nggak bagus buat lingkungan. Kalo pake nuklir sih oke-oke aja."
            />
            <CardKenapa
              icon={<Kenapa4 />}
              title="Linkungan"
              desc="Pokoknya nggak bagus lah buat lingkungan, ini alesan kita kenapa gak kasih insight. Demi menyelamatkan bumi!"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
