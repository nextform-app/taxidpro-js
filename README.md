# Tax ID Validation Library

Tax ID Pro allows you to quickly integrate tax ID validation into your existing applications and workflows. You can validate over 200 different tax ID formats for over 100 countries. Tax ID Pro ensures your system can handle the diverse tax identification needs of your international customer base.

Lookup is available for VAT Numbers from the European Union (EU), plus the United Kingdom and Australia. Tax ID Pro provides a simple way to check the validity of VAT numbers and ensure compliance with EU regulations.

### Install

```bash
npm i @balancer-team/taxidpro
```

### Usage

Provide your API key to the `Taxidpro` constructor. You can obtain an API key by signing up at [Tax ID Pro](https://taxid.pro/).

```ts
import { Taxidpro } from '@balancer-team/taxidpro'

const taxidpro = new Taxidpro({ apiKey: 'YOUR_API_KEY' })

const validationResult = await taxidpro.validate({
  country: 'au',
  tin: '92873837267',
  type: 'entity',
})

// Output:
//
// {
//   "is_valid": true,
//   "message": null,
//   "tin_compact": "92873837267",
//   "tin_standard": "92 873 837 267",
//   "country_name": "Australia",
//   "format_name": "Business Number"
// }

const lookupResult = await taxidpro.lookup({
  country: 'au',
  tin: '49004028077',
})

// Output:
//
// {
//   country_name: 'Australia',
//   tin_compact: '49004028077',
//   tin_standard: '49 004 028 077',
//   format_name: 'Business Number',
//   is_valid: true,
//   message: null,
//   lookup_data: { name: 'BHP GROUP LIMITED', address: '3000 VIC' }
// }
```

`TaxIDPro` is still exported as an alias for backwards compatibility.

### Supported Countries

| Country                                                                       | Code | Validate | Lookup |
| ----------------------------------------------------------------------------- | :--: | :------: | :----: |
| [Albania](https://taxid.pro/docs/countries/albania)                           |  al  |    ✔︎     |        |
| [Andorra](https://taxid.pro/docs/countries/andorra)                           |  ad  |    ✔︎     |        |
| [Argentina](https://taxid.pro/docs/countries/argentina)                       |  ar  |    ✔︎     |        |
| [Armenia](https://taxid.pro/docs/countries/armenia)                           |  am  |    ✔︎     |        |
| [Aruba](https://taxid.pro/docs/countries/aruba)                               |  aw  |    ✔︎     |        |
| [Australia](https://taxid.pro/docs/countries/australia)                       |  au  |    ✔︎     |   ✔︎    |
| [Austria](https://taxid.pro/docs/countries/austria)                           |  at  |    ✔︎     |   ✔︎    |
| [Azerbaijan](https://taxid.pro/docs/countries/azerbaijan)                     |  az  |    ✔︎     |        |
| [Bangladesh](https://taxid.pro/docs/countries/bangladesh)                     |  bd  |    ✔︎     |        |
| [Barbados](https://taxid.pro/docs/countries/barbados)                         |  bb  |    ✔︎     |        |
| [Belarus](https://taxid.pro/docs/countries/belarus)                           |  by  |    ✔︎     |        |
| [Belgium](https://taxid.pro/docs/countries/belgium)                           |  be  |    ✔︎     |   ✔︎    |
| [Belize](https://taxid.pro/docs/countries/belize)                             |  bz  |    ✔︎     |        |
| [Bolivia](https://taxid.pro/docs/countries/bolivia)                           |  bo  |    ✔︎     |        |
| [Brazil](https://taxid.pro/docs/countries/brazil)                             |  br  |    ✔︎     |        |
| [Brunei](https://taxid.pro/docs/countries/brunei)                             |  bn  |    ✔︎     |        |
| [Bulgaria](https://taxid.pro/docs/countries/bulgaria)                         |  bg  |    ✔︎     |   ✔︎    |
| [Canada](https://taxid.pro/docs/countries/canada)                             |  ca  |    ✔︎     |        |
| [Chile](https://taxid.pro/docs/countries/chile)                               |  cl  |    ✔︎     |        |
| [China](https://taxid.pro/docs/countries/china)                               |  cn  |    ✔︎     |        |
| [Colombia](https://taxid.pro/docs/countries/colombia)                         |  co  |    ✔︎     |        |
| [Costa Rica](https://taxid.pro/docs/countries/costa-rica)                     |  cr  |    ✔︎     |        |
| [Croatia](https://taxid.pro/docs/countries/croatia)                           |  hr  |    ✔︎     |   ✔︎    |
| [Cuba](https://taxid.pro/docs/countries/cuba)                                 |  cu  |    ✔︎     |        |
| [Curacao](https://taxid.pro/docs/countries/curacao)                           |  cw  |    ✔︎     |        |
| [Cyprus](https://taxid.pro/docs/countries/cyprus)                             |  cy  |    ✔︎     |   ✔︎    |
| [Czech Republic](https://taxid.pro/docs/countries/czech-republic)             |  cz  |    ✔︎     |   ✔︎    |
| [Denmark](https://taxid.pro/docs/countries/denmark)                           |  dk  |    ✔︎     |   ✔︎    |
| [Dominican Rep](https://taxid.pro/docs/countries/dominican-rep)               |  do  |    ✔︎     |        |
| [Ecuador](https://taxid.pro/docs/countries/ecuador)                           |  ec  |    ✔︎     |        |
| [Egypt](https://taxid.pro/docs/countries/egypt)                               |  eg  |    ✔︎     |        |
| [El Salvador](https://taxid.pro/docs/countries/el-salvador)                   |  sv  |    ✔︎     |        |
| [Estonia](https://taxid.pro/docs/countries/estonia)                           |  ee  |    ✔︎     |   ✔︎    |
| [Faroe Islands](https://taxid.pro/docs/countries/faroe-islands)               |  fo  |    ✔︎     |        |
| [Finland](https://taxid.pro/docs/countries/finland)                           |  fi  |    ✔︎     |   ✔︎    |
| [France](https://taxid.pro/docs/countries/france)                             |  fr  |    ✔︎     |   ✔︎    |
| [Georgia](https://taxid.pro/docs/countries/georgia)                           |  ge  |    ✔︎     |        |
| [Germany](https://taxid.pro/docs/countries/germany)                           |  de  |    ✔︎     |   ✔︎    |
| [Gibraltar](https://taxid.pro/docs/countries/gibraltar)                       |  gi  |    ✔︎     |        |
| [Greece](https://taxid.pro/docs/countries/greece)                             |  gr  |    ✔︎     |   ✔︎    |
| [Greenland](https://taxid.pro/docs/countries/greenland)                       |  gl  |    ✔︎     |        |
| [Guatemala](https://taxid.pro/docs/countries/guatemala)                       |  gt  |    ✔︎     |        |
| [Guernsey](https://taxid.pro/docs/countries/guernsey)                         |  gg  |    ✔︎     |        |
| [Hong Kong](https://taxid.pro/docs/countries/hong-kong)                       |  hk  |    ✔︎     |        |
| [Hungary](https://taxid.pro/docs/countries/hungary)                           |  hu  |    ✔︎     |   ✔︎    |
| [Iceland](https://taxid.pro/docs/countries/iceland)                           |  is  |    ✔︎     |        |
| [India](https://taxid.pro/docs/countries/india)                               |  in  |    ✔︎     |        |
| [Indonesia](https://taxid.pro/docs/countries/indonesia)                       |  id  |    ✔︎     |        |
| [Ireland](https://taxid.pro/docs/countries/ireland)                           |  ie  |    ✔︎     |   ✔︎    |
| [Israel](https://taxid.pro/docs/countries/israel)                             |  il  |    ✔︎     |        |
| [Italy](https://taxid.pro/docs/countries/italy)                               |  it  |    ✔︎     |   ✔︎    |
| [Jamaica](https://taxid.pro/docs/countries/jamaica)                           |  jm  |    ✔︎     |        |
| [Japan](https://taxid.pro/docs/countries/japan)                               |  jp  |    ✔︎     |        |
| [Jersey](https://taxid.pro/docs/countries/jersey)                             |  je  |    ✔︎     |        |
| [Kazakhstan](https://taxid.pro/docs/countries/kazakhstan)                     |  kz  |    ✔︎     |        |
| [Kuwait](https://taxid.pro/docs/countries/kuwait)                             |  kw  |    ✔︎     |        |
| [Kyrgyzstan](https://taxid.pro/docs/countries/kyrgyzstan)                     |  kg  |    ✔︎     |        |
| [Latvia](https://taxid.pro/docs/countries/latvia)                             |  lv  |    ✔︎     |   ✔︎    |
| [Liechtenstein](https://taxid.pro/docs/countries/liechtenstein)               |  li  |    ✔︎     |        |
| [Lithuania](https://taxid.pro/docs/countries/lithuania)                       |  lt  |    ✔︎     |   ✔︎    |
| [Luxembourg](https://taxid.pro/docs/countries/luxembourg)                     |  lu  |    ✔︎     |   ✔︎    |
| [Macedonia](https://taxid.pro/docs/countries/macedonia)                       |  mk  |    ✔︎     |        |
| [Malaysia](https://taxid.pro/docs/countries/malaysia)                         |  my  |    ✔︎     |        |
| [Malta](https://taxid.pro/docs/countries/malta)                               |  mt  |    ✔︎     |   ✔︎    |
| [Mauritius](https://taxid.pro/docs/countries/mauritius)                       |  mu  |    ✔︎     |        |
| [Mexico](https://taxid.pro/docs/countries/mexico)                             |  mx  |    ✔︎     |        |
| [Moldova](https://taxid.pro/docs/countries/moldova)                           |  md  |    ✔︎     |        |
| [Monaco](https://taxid.pro/docs/countries/monaco)                             |  mc  |    ✔︎     |        |
| [Montenegro](https://taxid.pro/docs/countries/montenegro)                     |  me  |    ✔︎     |        |
| [Morocco](https://taxid.pro/docs/countries/morocco)                           |  ma  |    ✔︎     |        |
| [Netherlands](https://taxid.pro/docs/countries/netherlands)                   |  nl  |    ✔︎     |   ✔︎    |
| [New Zealand](https://taxid.pro/docs/countries/new-zealand)                   |  nz  |    ✔︎     |        |
| [Nicaragua](https://taxid.pro/docs/countries/nicaragua)                       |  ni  |    ✔︎     |        |
| [Northern Ireland](https://taxid.pro/docs/countries/northern-ireland)         |  xi  |    ✔︎     |   ✔︎    |
| [Norway](https://taxid.pro/docs/countries/norway)                             |  no  |    ✔︎     |        |
| [Pakistan](https://taxid.pro/docs/countries/pakistan)                         |  pk  |    ✔︎     |        |
| [Panama](https://taxid.pro/docs/countries/panama)                             |  pa  |    ✔︎     |        |
| [Paraguay](https://taxid.pro/docs/countries/paraguay)                         |  py  |    ✔︎     |        |
| [Peru](https://taxid.pro/docs/countries/peru)                                 |  pe  |    ✔︎     |        |
| [Philippines](https://taxid.pro/docs/countries/philippines)                   |  ph  |    ✔︎     |        |
| [Poland](https://taxid.pro/docs/countries/poland)                             |  pl  |    ✔︎     |   ✔︎    |
| [Portugal](https://taxid.pro/docs/countries/portugal)                         |  pt  |    ✔︎     |   ✔︎    |
| [Romania](https://taxid.pro/docs/countries/romania)                           |  ro  |    ✔︎     |   ✔︎    |
| [Russia](https://taxid.pro/docs/countries/russia)                             |  ru  |    ✔︎     |        |
| [Samoa](https://taxid.pro/docs/countries/samoa)                               |  ws  |    ✔︎     |        |
| [San Marino](https://taxid.pro/docs/countries/san-marino)                     |  sm  |    ✔︎     |        |
| [Saudi Arabia](https://taxid.pro/docs/countries/saudi-arabia)                 |  sa  |    ✔︎     |        |
| [Serbia](https://taxid.pro/docs/countries/serbia)                             |  rs  |    ✔︎     |        |
| [Singapore](https://taxid.pro/docs/countries/singapore)                       |  sg  |    ✔︎     |        |
| [Slovakia](https://taxid.pro/docs/countries/slovakia)                         |  sk  |    ✔︎     |   ✔︎    |
| [Slovenia](https://taxid.pro/docs/countries/slovenia)                         |  si  |    ✔︎     |   ✔︎    |
| [South Africa](https://taxid.pro/docs/countries/south-africa)                 |  za  |    ✔︎     |        |
| [South Korea](https://taxid.pro/docs/countries/south-korea)                   |  kr  |    ✔︎     |        |
| [Spain](https://taxid.pro/docs/countries/spain)                               |  es  |    ✔︎     |   ✔︎    |
| [Sri Lanka](https://taxid.pro/docs/countries/sri-lanka)                       |  lk  |    ✔︎     |        |
| [Sweden](https://taxid.pro/docs/countries/sweden)                             |  se  |    ✔︎     |   ✔︎    |
| [Switzerland](https://taxid.pro/docs/countries/switzerland)                   |  ch  |    ✔︎     |        |
| [Tajikistan](https://taxid.pro/docs/countries/tajikistan)                     |  tj  |    ✔︎     |        |
| [Thailand](https://taxid.pro/docs/countries/thailand)                         |  th  |    ✔︎     |        |
| [Trinidad](https://taxid.pro/docs/countries/trinidad)                         |  tt  |    ✔︎     |        |
| [Tunisia](https://taxid.pro/docs/countries/tunisia)                           |  tn  |    ✔︎     |        |
| [Turkey](https://taxid.pro/docs/countries/turkey)                             |  tr  |    ✔︎     |        |
| [Turkmenistan](https://taxid.pro/docs/countries/turkmenistan)                 |  tm  |    ✔︎     |        |
| [Ukraine](https://taxid.pro/docs/countries/ukraine)                           |  ua  |    ✔︎     |        |
| [United Arab Emirates](https://taxid.pro/docs/countries/united-arab-emirates) |  ae  |    ✔︎     |        |
| [United Kingdom](https://taxid.pro/docs/countries/united-kingdom)             |  gb  |    ✔︎     |   ✔︎    |
| [United States](https://taxid.pro/docs/countries/united-states)               |  us  |    ✔︎     |        |
| [Uruguay](https://taxid.pro/docs/countries/uruguay)                           |  uy  |    ✔︎     |        |
| [Uzbekistan](https://taxid.pro/docs/countries/uzbekistan)                     |  uz  |    ✔︎     |        |
| [Venezuela](https://taxid.pro/docs/countries/venezuela)                       |  ve  |    ✔︎     |        |
| [Vietnam](https://taxid.pro/docs/countries/vietnam)                           |  vn  |    ✔︎     |        |
