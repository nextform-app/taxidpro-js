import 'dotenv/config'
import test from 'node:test'
import assert from 'node:assert'
import { Taxidpro, TaxIDPro } from '../src'

const taxidpro = new Taxidpro({ apiKey: process.env.API_KEY || '' })

test('TaxIDPro remains an alias of Taxidpro', () => {
  assert.strictEqual(TaxIDPro, Taxidpro)
})

test('validate', async () => {
  const res = await taxidpro.validate({ country: 'au', tin: '92873837267', type: 'entity' })
  assert.strictEqual(res.is_valid, true)
  assert.strictEqual(res.message, null)
  assert.strictEqual(res.tin_compact, '92873837267')
  assert.strictEqual(res.tin_standard, '92 873 837 267')
  assert.strictEqual(res.country_name, 'Australia')
  assert.strictEqual(res.format_name, 'Business Number')
})

test('lookup', async () => {
  const res = await taxidpro.lookup({ country: 'au', tin: '49004028077' })
  assert.strictEqual(res.is_valid, true)
  assert.strictEqual(res.message, null)
  assert.strictEqual(res.tin_compact, '49004028077')
  assert.strictEqual(res.tin_standard, '49 004 028 077')
  assert.strictEqual(res.country_name, 'Australia')
  assert.strictEqual(res.format_name, 'Business Number')
  assert.strictEqual(res.lookup_data.name, 'BHP GROUP LIMITED')
  assert.strictEqual(res.lookup_data.address, '3000 VIC')
})
