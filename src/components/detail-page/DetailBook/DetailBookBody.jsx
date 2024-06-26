import React from 'react';
import DetailBookFooter from './DetailBookFooter';
import DetailBookOwner from './DetailBookOwner';
import ButtonPinjam from './ButtonPinjam';

function DetailBookBody({ author, owner, avatar, durationInMonths, location, peminjam, antrian, isAvailable, id, title }) {
  return (
    <div className="detail-book__body d-flex flex-column gap-4">
      <ButtonPinjam
        id={id}
        isAvailable={isAvailable}
        title={title}
      />
      <div className="detail-book__body__owner">
        <DetailBookOwner
          owner={owner}
          avatar={avatar}
        />
      </div>
      <div className="detail-book__body__footer d-flex w-100 gap-4 justify-content-around">
        <DetailBookFooter
          icon="/images/icon-penulis.svg"
          type="Penulis:"
          fill={author}
        />
        <DetailBookFooter
          icon="/images/icon-durasi.svg"
          type="Durasi Pinjam:"
          fill={`${durationInMonths} bulan`}
        />
        <DetailBookFooter
          icon="/images/icon-peminjam.svg"
          type="Jumlah Peminjam:"
          fill={peminjam}
        />
        <DetailBookFooter
          icon="/images/icon-antrian.svg"
          type="Antrian:"
          fill={`${antrian} orang`}
        />
        <DetailBookFooter
          icon="/images/icon-lokasi.svg"
          type="Lokasi:"
          fill={location}
        />
      </div>
    </div>
  );
}

export default DetailBookBody;
