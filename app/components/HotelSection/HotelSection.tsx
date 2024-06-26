// components/HotelSection.js
import React from 'react';
import Link from 'next/link';

const HotelSection: React.FC = () => (
  <section className="ftco-intro img" id="hotel-section" style={{ backgroundImage: "url(/images/bg_4.jpg)", backgroundSize: '2000px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
    <div className="container">
        {/* <img src="/images/bg_4.jpg" alt="Gallery Image" /> */}
      <div className="row justify-content-center">
        <div className="col-md-9 text-center">
          <h2>전세계 호텔 특가</h2>
          <p>
            트리플러터가 전세계 최저가 호텔을 추천해드릴께요
          </p>
          <p className="mb-0">
            <Link href="#" className="btn btn-white px-4 py-3">
                호텔 검색하기
            </Link>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HotelSection;
