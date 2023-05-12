import Container from "../Container";
import SubTitleSection from "../SubTitleSection";
import TextSection from "../TextSection";
import TitleSection from "../TitleSection";
import CardGimana from "./CardGimana";
import Gimana1 from "@/public/gimana/gimana-1.png";
import Gimana2 from "@/public/gimana/gimana-2.png";
import Gimana3 from "@/public/gimana/gimana-3.png";

export default function SectionGimana() {
  return (
    <section className="py-[100px]">
      <Container>
        <div className="w-6/12 px-2 mx-auto text-center">
          <TitleSection noline color="primary">
            terus gimana?
          </TitleSection>
          <SubTitleSection color="dark" margin="10px 0 20px 0">
            Terus Ngapain Dong Kalo Nggak Ada Insight Apapun?
          </SubTitleSection>
          <TextSection color="secondary">
            Ya nggak tau, salah sendiri lu ngapain ke website ini. Tapi ada tiga
            kemungkinan kenapa lo bisa ada di website ini. Ketiga kemungkinan
            itu akan gwej jabarkan di bawah ini dengan ilustrasinya hehehe.
          </TextSection>
        </div>
        <div className="flex gap-8 mt-16">
          <CardGimana
            img={Gimana1}
            alt="Gimana1"
            title="Kamu Tidak Punya Kekasih"
            desc="Sudah pasti orang yang tidak punya kekasih akan memiliki waktu luang yang banyak, jadi ya lo iseng aja gitu datang ke website ini."
          />
          <CardGimana
            img={Gimana2}
            alt="Gimana2"
            title="Lo Wibu Autid"
            desc="Iyh bener, biasanya wibu kalo nggak halu waifu suka iseng nggak jelas, termasuk mengunjungi website ini tanpa alasan yang jelas hehehe."
          />
          <CardGimana
            img={Gimana3}
            alt="Gimana3"
            title="Kok Gambar Ayam?"
            desc="Lah ngatur. Nggak tau lagi gwej alasan yang ketiga, biar bagus aja desainnya. Kalo cuman dua jadinya nggak bagus hehe."
          />
        </div>
      </Container>
    </section>
  );
}
