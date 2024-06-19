import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';

function SectionSecond({ onValidationChange, onDataChange }) {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedVillage, setSelectedVillage] = useState('');
  const [alamatLengkap, setAlamatLengkap] = useState('');

  useEffect(() => {
    fetchProvinces();
  }, []);

  const fetchProvinces = async () => {
    const response = await fetch('https://kanglerian.github.io/api-wilayah-indonesia/api/provinces.json');
    const data = await response.json();
    setProvinces(data);
  };

  const fetchCities = async (provinceId) => {
    const response = await fetch(`https://kanglerian.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`);
    const data = await response.json();
    setCities(data);
  };

  const fetchDistricts = async (cityId) => {
    const response = await fetch(`https://kanglerian.github.io/api-wilayah-indonesia/api/districts/${cityId}.json`);
    const data = await response.json();
    setDistricts(data);
  };

  const fetchVillages = async (districtId) => {
    const response = await fetch(`https://kanglerian.github.io/api-wilayah-indonesia/api/villages/${districtId}.json`);
    const data = await response.json();
    setVillages(data);
  };

  const handleProvinceChange = (e) => {
    const provinceId = e.target.value;
    //const provinceName = provinces.find(province => province.id === provinceId).name;
    setSelectedProvince(provinceId);
    fetchCities(provinceId);
    setSelectedCity('');
    setSelectedDistrict('');
    setSelectedVillage('');
    setVillages([]);
    //onAddressDataChange({ selectedProvince: provinceId, selectedCity: '', selectedDistrict: '', selectedVillage: '', alamatLengkap });
  };

  const handleCityChange = (e) => {
    const cityId = e.target.value;
    //const cityName = city.find(city => city.id === cityId).name;
    setSelectedCity(cityId);
    fetchDistricts(cityId);
    setSelectedDistrict('');
    setSelectedVillage('');
    setVillages([]);
    //onAddressDataChange({ selectedProvince, selectedCity: cityId, selectedDistrict: '', selectedVillage: '', alamatLengkap });
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);
    fetchVillages(districtId);
    setSelectedVillage('');
    //onAddressDataChange({ selectedProvince, selectedCity, selectedDistrict: districtId, selectedVillage: '', alamatLengkap });
  };

  const handleVillageChange = (e) => {
    const villageId = e.target.value;
    setSelectedVillage(villageId);
    //onAddressDataChange({ selectedProvince, selectedCity, selectedDistrict, selectedVillage: villageId, alamatLengkap });
  };

  const handleAlamatLengkapChange = (e) => {
    setAlamatLengkap(e.target.value);
    //onAddressDataChange({ selectedProvince, selectedCity, selectedDistrict, selectedVillage, alamatLengkap: e.target.value });
  };

  useEffect(() => {
    const isValid = selectedProvince && selectedCity && selectedDistrict && selectedVillage && alamatLengkap;
    onValidationChange(isValid);
    onDataChange({
      selectedProvince,
      selectedCity,
      selectedDistrict,
      selectedVillage,
      alamatLengkap
    });
  }, [selectedProvince, selectedCity, selectedDistrict, selectedVillage, alamatLengkap, onValidationChange]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '627px',
      margin: 'auto',
      boxSizing: 'border-box'
    }}>
      <Form>
        <hr></hr>
        <Form.Group className="mb-2" controlId="formProvince">
          <Form.Label className='fw-bolder'>Provinsi</Form.Label>
          <Form.Control as="select" value={selectedProvince} onChange={handleProvinceChange}>
            <option value="">Pilih Provinsi</option>
            {provinces.map(province => (
              <option key={province.id} value={province.id}>
                {province.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-2 mt-1" controlId="formCity">
          <Form.Label className='fw-bolder'>Kabupaten/Kota</Form.Label>
          <Form.Control as="select" value={selectedCity} onChange={handleCityChange} disabled={!selectedProvince}>
            <option value="">Pilih Kabupaten/Kota</option>
            {cities.map(regency => (
              <option key={regency.id} value={regency.id}>
                {regency.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-2 mt-1" controlId="formDistrict">
          <Form.Label className='fw-bolder'>Kecamatan</Form.Label>
          <Form.Control as="select" value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedCity}>
            <option value="">Pilih Kecamatan</option>
            {districts.map(district => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-2 mt-1" controlId="formVillage">
          <Form.Label className='fw-bolder'>Desa/Kelurahan</Form.Label>
          <Form.Control as="select" value={selectedVillage} onChange={handleVillageChange} disabled={!selectedDistrict}>
            <option value="">Pilih Desa/Kelurahan</option>
            {villages.map(village => (
              <option key={village.id} value={village.id}>
                {village.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-2" controlId="alamatLengkap">
          <Form.Label className='fw-bolder'>Alamat Lengkap</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder='' value={alamatLengkap} onChange={handleAlamatLengkapChange} />
        </Form.Group>
        <Form.Group className="mb-4" controlId="catatan">
          <Form.Label className='fw-bolder'>Catatan (Opsional)</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default SectionSecond;
