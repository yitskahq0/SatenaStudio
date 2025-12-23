import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="pt-32 px-6 md:px-24 max-w-6xl mx-auto">

      {/* HERO / BRAND STATEMENT */}
      <section className="mb-28">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Berawal dari Ide Sederhana,  
          <span className="text-[#93bda9] block">
            Berkembang Menjadi Sebuah Brand
          </span>
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Satena lahir dari keyakinan bahwa ruang bukan hanya soal bangunan,
          tetapi tentang pengalaman, kenyamanan, dan nilai jangka panjang
          bagi orang-orang yang menggunakannya.
        </p>
      </section>

      {/* BRAND STORY + OWNER */}
      <section className="grid md:grid-cols-2 gap-16 items-center mb-32">

        {/* FOTO OWNER */}
        <img
          src="/ownerpp.png"
          alt="Founder Satena"
          className="rounded-2xl w-full h-[480px] object-cover"
        />

        {/* STORY */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            Cerita di Balik Satena
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Satena berawal dari perjalanan personal sang pendiri yang
            tertarik pada bagaimana sebuah ruang dapat memengaruhi cara
            manusia beraktivitas dan berinteraksi. Pada tahap awal,
            fokus kami sederhana: menciptakan desain yang rapi,
            fungsional, dan sesuai kebutuhan klien.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Seiring waktu dan pengalaman di lapangan, ide tersebut berkembang.
            Satena tidak lagi hanya memikirkan tampilan visual,
            tetapi juga proses, struktur, dan keberlanjutan dari
            setiap proyek yang dikerjakan.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Hari ini, Satena hadir sebagai studio desain dan konstruksi
            yang mendampingi klien secara menyeluruh — dari konsep awal,
            perencanaan teknis, hingga realisasi akhir — tanpa
            meninggalkan nilai awal yang kami pegang sejak awal.
          </p>

          <div className="mt-6">
            <p className="font-semibold">Han Lois Herlambang</p>
            <p className="text-sm text-gray-500">
              Founder & Operation Director
            </p>
          </div>
        </div>
      </section>

      {/* BRAND VALUES */}
      <section className="mb-32">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Nilai yang Membentuk Cara Kami Bekerja
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              Berangkat dari Kebutuhan Nyata
            </h3>
            <p className="text-gray-600">
              Setiap proyek dimulai dari pemahaman mendalam
              terhadap kebutuhan dan karakter klien.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              Proses yang Bertanggung Jawab
            </h3>
            <p className="text-gray-600">
              Kami menjaga transparansi, perencanaan matang,
              dan eksekusi yang terkontrol.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              Nilai Jangka Panjang
            </h3>
            <p className="text-gray-600">
              Desain dan bangunan kami rancang untuk bertahan,
              bukan sekadar mengikuti tren.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#93bda9] text-white rounded-2xl p-14 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Mari Membangun Ruang Bersama
        </h2>

        <p className="mb-8 max-w-2xl mx-auto">
          Jika Anda mencari partner yang memahami proses,
          detail, dan visi jangka panjang, kami siap berdiskusi.
        </p>

        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          className="inline-block bg-white text-[#93bda9] font-semibold px-10 py-4 rounded-full hover:bg-gray-100 transition"
        >
          Hubungi Kami
        </a>
      </section>
    </div>
  );
}
