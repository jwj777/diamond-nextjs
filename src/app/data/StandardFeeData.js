
const standardFees = {
  "1": {
    "Standard": 20.0,
    "Diamond Club": 18.0,
    "Diamond Premium": 16.0,
    "Dealers Club": 14.0
  },
  "100": {
    "Standard": 20.0,
    "Diamond Club": 18.0,
    "Diamond Premium": 16.0,
    "Dealers Club": 14.0
  },
  "200": {
    "Standard": 20.0,
    "Diamond Club": 18.0,
    "Diamond Premium": 16.0,
    "Dealers Club": 14.0
  },
  "300": {
    "Standard": 20.0,
    "Diamond Club": 18.0,
    "Diamond Premium": 16.0,
    "Dealers Club": 14.0
  },
  "400": {
    "Standard": 20.0,
    "Diamond Club": 18.0,
    "Diamond Premium": 16.0,
    "Dealers Club": 14.0
  },
  "500": {
    "Standard": 20.0,
    "Diamond Club": 18.0,
    "Diamond Premium": 16.0,
    "Dealers Club": 14.0
  },
  "600": {
    "Standard": 22.0,
    "Diamond Club": 19.8,
    "Diamond Premium": 17.6,
    "Dealers Club": 15.4
  },
  "700": {
    "Standard": 24.0,
    "Diamond Club": 21.6,
    "Diamond Premium": 19.2,
    "Dealers Club": 16.8
  },
  "800": {
    "Standard": 26.0,
    "Diamond Club": 23.4,
    "Diamond Premium": 20.8,
    "Dealers Club": 18.2
  },
  "900": {
    "Standard": 28.0,
    "Diamond Club": 25.2,
    "Diamond Premium": 22.4,
    "Dealers Club": 19.6
  },
  "1000": {
    "Standard": 30.0,
    "Diamond Club": 27.0,
    "Diamond Premium": 24.0,
    "Dealers Club": 21.0
  },
  "1100": {
    "Standard": 32.0,
    "Diamond Club": 28.8,
    "Diamond Premium": 25.6,
    "Dealers Club": 22.4
  },
  "1200": {
    "Standard": 34.0,
    "Diamond Club": 30.6,
    "Diamond Premium": 27.2,
    "Dealers Club": 23.8
  },
  "1300": {
    "Standard": 36.0,
    "Diamond Club": 32.4,
    "Diamond Premium": 28.8,
    "Dealers Club": 25.2
  },
  "1400": {
    "Standard": 38.0,
    "Diamond Club": 34.2,
    "Diamond Premium": 30.4,
    "Dealers Club": 26.6
  },
  "1500": {
    "Standard": 40.0,
    "Diamond Club": 36.0,
    "Diamond Premium": 32.0,
    "Dealers Club": 28.0
  },
  "1600": {
    "Standard": 44.0,
    "Diamond Club": 39.6,
    "Diamond Premium": 35.2,
    "Dealers Club": 30.8
  },
  "1700": {
    "Standard": 48.0,
    "Diamond Club": 43.2,
    "Diamond Premium": 38.4,
    "Dealers Club": 33.6
  },
  "1800": {
    "Standard": 52.0,
    "Diamond Club": 46.8,
    "Diamond Premium": 41.6,
    "Dealers Club": 36.4
  },
  "1900": {
    "Standard": 56.0,
    "Diamond Club": 50.4,
    "Diamond Premium": 44.8,
    "Dealers Club": 39.2
  },
  "2000": {
    "Standard": 60.0,
    "Diamond Club": 54.0,
    "Diamond Premium": 48.0,
    "Dealers Club": 42.0
  },
  "2100": {
    "Standard": 64.0,
    "Diamond Club": 57.6,
    "Diamond Premium": 51.2,
    "Dealers Club": 44.8
  },
  "2200": {
    "Standard": 68.0,
    "Diamond Club": 61.2,
    "Diamond Premium": 54.4,
    "Dealers Club": 47.6
  },
  "2300": {
    "Standard": 72.0,
    "Diamond Club": 64.8,
    "Diamond Premium": 57.6,
    "Dealers Club": 50.4
  },
  "2400": {
    "Standard": 76.0,
    "Diamond Club": 68.4,
    "Diamond Premium": 60.8,
    "Dealers Club": 53.2
  },
  "2500": {
    "Standard": 80.0,
    "Diamond Club": 72.0,
    "Diamond Premium": 64.0,
    "Dealers Club": 56.0
  },
  "2600": {
    "Standard": 83.2,
    "Diamond Club": 74.88,
    "Diamond Premium": 66.56,
    "Dealers Club": 58.24
  },
  "2700": {
    "Standard": 86.4,
    "Diamond Club": 77.76,
    "Diamond Premium": 69.12,
    "Dealers Club": 60.48
  },
  "2800": {
    "Standard": 89.6,
    "Diamond Club": 80.64,
    "Diamond Premium": 71.68,
    "Dealers Club": 62.72
  },
  "2900": {
    "Standard": 92.8,
    "Diamond Club": 83.52,
    "Diamond Premium": 74.24,
    "Dealers Club": 64.96
  },
  "3000": {
    "Standard": 96.0,
    "Diamond Club": 86.4,
    "Diamond Premium": 76.8,
    "Dealers Club": 67.2
  },
  "3100": {
    "Standard": 99.2,
    "Diamond Club": 89.28,
    "Diamond Premium": 79.36,
    "Dealers Club": 69.44
  },
  "3200": {
    "Standard": 102.4,
    "Diamond Club": 92.16,
    "Diamond Premium": 81.92,
    "Dealers Club": 71.68
  },
  "3300": {
    "Standard": 105.6,
    "Diamond Club": 95.04,
    "Diamond Premium": 84.48,
    "Dealers Club": 73.92
  },
  "3400": {
    "Standard": 108.8,
    "Diamond Club": 97.92,
    "Diamond Premium": 87.04,
    "Dealers Club": 76.16
  },
  "3500": {
    "Standard": 112.0,
    "Diamond Club": 100.8,
    "Diamond Premium": 89.6,
    "Dealers Club": 78.4
  },
  "3600": {
    "Standard": 115.2,
    "Diamond Club": 103.68,
    "Diamond Premium": 92.16,
    "Dealers Club": 80.64
  },
  "3700": {
    "Standard": 118.4,
    "Diamond Club": 106.56,
    "Diamond Premium": 94.72,
    "Dealers Club": 82.88
  },
  "3800": {
    "Standard": 121.6,
    "Diamond Club": 109.44,
    "Diamond Premium": 97.28,
    "Dealers Club": 85.12
  },
  "3900": {
    "Standard": 124.8,
    "Diamond Club": 112.32,
    "Diamond Premium": 99.84,
    "Dealers Club": 87.36
  },
  "4000": {
    "Standard": 128.0,
    "Diamond Club": 115.2,
    "Diamond Premium": 102.4,
    "Dealers Club": 89.6
  },
  "4100": {
    "Standard": 131.2,
    "Diamond Club": 118.08,
    "Diamond Premium": 104.96,
    "Dealers Club": 91.84
  },
  "4200": {
    "Standard": 134.4,
    "Diamond Club": 120.96,
    "Diamond Premium": 107.52,
    "Dealers Club": 94.08
  },
  "4300": {
    "Standard": 137.6,
    "Diamond Club": 123.84,
    "Diamond Premium": 110.08,
    "Dealers Club": 96.32
  },
  "4400": {
    "Standard": 140.8,
    "Diamond Club": 126.72,
    "Diamond Premium": 112.64,
    "Dealers Club": 98.56
  },
  "4500": {
    "Standard": 144.0,
    "Diamond Club": 129.6,
    "Diamond Premium": 115.2,
    "Dealers Club": 100.8
  },
  "4600": {
    "Standard": 147.2,
    "Diamond Club": 132.48,
    "Diamond Premium": 117.76,
    "Dealers Club": 103.04
  },
  "4700": {
    "Standard": 150.4,
    "Diamond Club": 135.36,
    "Diamond Premium": 120.32,
    "Dealers Club": 105.28
  },
  "4800": {
    "Standard": 153.6,
    "Diamond Club": 138.24,
    "Diamond Premium": 122.88,
    "Dealers Club": 107.52
  },
  "4900": {
    "Standard": 156.8,
    "Diamond Club": 141.12,
    "Diamond Premium": 125.44,
    "Dealers Club": 109.76
  },
  "5000": {
    "Standard": 160.0,
    "Diamond Club": 144.0,
    "Diamond Premium": 128.0,
    "Dealers Club": 112.0
  },
  "5100": {
    "Standard": 163.2,
    "Diamond Club": 146.96,
    "Diamond Premium": 130.56,
    "Dealers Club": 114.24
  },
  "5200": {
    "Standard": 166.4,
    "Diamond Club": 149.92,
    "Diamond Premium": 133.12,
    "Dealers Club": 116.48
  },
  "5300": {
    "Standard": 169.6,
    "Diamond Club": 152.88,
    "Diamond Premium": 135.68,
    "Dealers Club": 118.72
  },
  "5400": {
    "Standard": 172.8,
    "Diamond Club": 155.84,
    "Diamond Premium": 138.24,
    "Dealers Club": 120.96
  },
  "5500": {
    "Standard": 176.0,
    "Diamond Club": 158.8,
    "Diamond Premium": 140.8,
    "Dealers Club": 123.2
  },
  "5600": {
    "Standard": 179.2,
    "Diamond Club": 161.76,
    "Diamond Premium": 143.36,
    "Dealers Club": 125.44
  },
  "5700": {
    "Standard": 182.4,
    "Diamond Club": 164.72,
    "Diamond Premium": 145.92,
    "Dealers Club": 127.68
  },
  "5800": {
    "Standard": 185.6,
    "Diamond Club": 167.68,
    "Diamond Premium": 148.48,
    "Dealers Club": 129.92
  },
  "5900": {
    "Standard": 188.8,
    "Diamond Club": 170.64,
    "Diamond Premium": 151.04,
    "Dealers Club": 132.16
  },
  "6000": {
    "Standard": 192.0,
    "Diamond Club": 173.6,
    "Diamond Premium": 153.6,
    "Dealers Club": 134.4
  },
  "6100": {
    "Standard": 195.2,
    "Diamond Club": 176.56,
    "Diamond Premium": 156.16,
    "Dealers Club": 136.64
  },
  "6200": {
    "Standard": 198.4,
    "Diamond Club": 179.52,
    "Diamond Premium": 158.72,
    "Dealers Club": 138.88
  },
  "6300": {
    "Standard": 201.6,
    "Diamond Club": 182.48,
    "Diamond Premium": 161.28,
    "Dealers Club": 141.12
  },
  "6400": {
    "Standard": 204.8,
    "Diamond Club": 185.44,
    "Diamond Premium": 163.84,
    "Dealers Club": 143.36
  },
  "6500": {
    "Standard": 208.0,
    "Diamond Club": 188.4,
    "Diamond Premium": 166.4,
    "Dealers Club": 145.6
  },
  "6600": {
    "Standard": 211.2,
    "Diamond Club": 191.36,
    "Diamond Premium": 168.96,
    "Dealers Club": 147.84
  },
  "6700": {
    "Standard": 214.4,
    "Diamond Club": 194.32,
    "Diamond Premium": 171.52,
    "Dealers Club": 150.08
  },
  "6800": {
    "Standard": 217.6,
    "Diamond Club": 197.28,
    "Diamond Premium": 174.08,
    "Dealers Club": 152.32
  },
  "6900": {
    "Standard": 220.8,
    "Diamond Club": 200.24,
    "Diamond Premium": 176.64,
    "Dealers Club": 154.56
  },
  "7000": {
    "Standard": 224.0,
    "Diamond Club": 203.2,
    "Diamond Premium": 179.2,
    "Dealers Club": 156.8
  },
  "7100": {
    "Standard": 227.2,
    "Diamond Club": 206.16,
    "Diamond Premium": 181.76,
    "Dealers Club": 159.04
  },
  "7200": {
    "Standard": 230.4,
    "Diamond Club": 209.12,
    "Diamond Premium": 184.32,
    "Dealers Club": 161.28
  },
  "7300": {
    "Standard": 233.6,
    "Diamond Club": 212.08,
    "Diamond Premium": 186.88,
    "Dealers Club": 163.52
  },
  "7400": {
    "Standard": 236.8,
    "Diamond Club": 215.04,
    "Diamond Premium": 189.44,
    "Dealers Club": 165.76
  },
  "7500": {
    "Standard": 240.0,
    "Diamond Club": 218.0,
    "Diamond Premium": 192.0,
    "Dealers Club": 168.0
  },
  "7600": {
    "Standard": 243.2,
    "Diamond Club": 220.8,
    "Diamond Premium": 194.56,
    "Dealers Club": 170.24
  },
  "7700": {
    "Standard": 246.4,
    "Diamond Club": 223.6,
    "Diamond Premium": 197.12,
    "Dealers Club": 172.48
  },
  "7800": {
    "Standard": 249.6,
    "Diamond Club": 226.4,
    "Diamond Premium": 199.68,
    "Dealers Club": 174.72
  },
  "7900": {
    "Standard": 252.8,
    "Diamond Club": 229.2,
    "Diamond Premium": 202.24,
    "Dealers Club": 176.96
  },
  "8000": {
    "Standard": 256.0,
    "Diamond Club": 232.0,
    "Diamond Premium": 204.8,
    "Dealers Club": 179.2
  },
  "8100": {
    "Standard": 259.2,
    "Diamond Club": 234.8,
    "Diamond Premium": 207.36,
    "Dealers Club": 181.44
  },
  "8200": {
    "Standard": 262.4,
    "Diamond Club": 237.6,
    "Diamond Premium": 209.92,
    "Dealers Club": 183.68
  },
  "8300": {
    "Standard": 265.6,
    "Diamond Club": 240.4,
    "Diamond Premium": 212.48,
    "Dealers Club": 185.92
  },
  "8400": {
    "Standard": 268.8,
    "Diamond Club": 243.2,
    "Diamond Premium": 215.04,
    "Dealers Club": 188.16
  },
  "8500": {
    "Standard": 272.0,
    "Diamond Club": 246.0,
    "Diamond Premium": 217.6,
    "Dealers Club": 190.4
  },
  "8600": {
    "Standard": 275.2,
    "Diamond Club": 248.8,
    "Diamond Premium": 220.16,
    "Dealers Club": 192.64
  },
  "8700": {
    "Standard": 278.4,
    "Diamond Club": 251.6,
    "Diamond Premium": 222.72,
    "Dealers Club": 194.88
  },
  "8800": {
    "Standard": 281.6,
    "Diamond Club": 254.4,
    "Diamond Premium": 225.28,
    "Dealers Club": 197.12
  },
  "8900": {
    "Standard": 284.8,
    "Diamond Club": 257.2,
    "Diamond Premium": 227.84,
    "Dealers Club": 199.36
  },
  "9000": {
    "Standard": 288.0,
    "Diamond Club": 260.0,
    "Diamond Premium": 230.4,
    "Dealers Club": 201.6
  },
  "9100": {
    "Standard": 291.2,
    "Diamond Club": 262.8,
    "Diamond Premium": 232.96,
    "Dealers Club": 203.84
  },
  "9200": {
    "Standard": 294.4,
    "Diamond Club": 265.6,
    "Diamond Premium": 235.52,
    "Dealers Club": 206.08
  },
  "9300": {
    "Standard": 297.6,
    "Diamond Club": 268.4,
    "Diamond Premium": 238.08,
    "Dealers Club": 208.32
  },
  "9400": {
    "Standard": 300.8,
    "Diamond Club": 271.2,
    "Diamond Premium": 240.64,
    "Dealers Club": 210.56
  },
  "9500": {
    "Standard": 304.0,
    "Diamond Club": 274.0,
    "Diamond Premium": 243.2,
    "Dealers Club": 212.8
  },
  "9600": {
    "Standard": 307.2,
    "Diamond Club": 276.8,
    "Diamond Premium": 245.76,
    "Dealers Club": 215.04
  },
  "9700": {
    "Standard": 310.4,
    "Diamond Club": 279.6,
    "Diamond Premium": 248.32,
    "Dealers Club": 217.28
  },
  "9800": {
    "Standard": 313.6,
    "Diamond Club": 282.4,
    "Diamond Premium": 250.88,
    "Dealers Club": 219.52
  },
  "9900": {
    "Standard": 316.8,
    "Diamond Club": 285.2,
    "Diamond Premium": 253.44,
    "Dealers Club": 221.76
  },
  "10000": {
    "Standard": 320.0,
    "Diamond Club": 288.0,
    "Diamond Premium": 256.0,
    "Dealers Club": 224.0
  },
  "10100": { "Standard": 323.20, "CLUB": 290.80, "PREMIUM": 258.56, "DEALER'S": 226.24 },
  "10200": { "Standard": 326.40, "CLUB": 293.60, "PREMIUM": 261.12, "DEALER'S": 228.48 },
  "10300": { "Standard": 329.60, "CLUB": 296.40, "PREMIUM": 263.68, "DEALER'S": 230.72 },
  "10400": { "Standard": 332.80, "CLUB": 299.20, "PREMIUM": 266.24, "DEALER'S": 232.96 },
  "10500": { "Standard": 336.00, "CLUB": 302.00, "PREMIUM": 268.80, "DEALER'S": 235.20 },
  "10600": { "Standard": 339.20, "CLUB": 304.80, "PREMIUM": 271.36, "DEALER'S": 237.44 },
  "10700": { "Standard": 342.40, "CLUB": 307.60, "PREMIUM": 273.92, "DEALER'S": 239.68 },
  "10800": { "Standard": 345.60, "CLUB": 310.40, "PREMIUM": 276.48, "DEALER'S": 241.92 },
  "10900": { "Standard": 348.80, "CLUB": 313.20, "PREMIUM": 279.04, "DEALER'S": 244.16 },
  "11000": { "Standard": 352.00, "CLUB": 316.00, "PREMIUM": 281.60, "DEALER'S": 246.40 },
  "11100": { "Standard": 355.20, "CLUB": 318.80, "PREMIUM": 284.16, "DEALER'S": 248.64 },
  "11200": { "Standard": 358.40, "CLUB": 321.60, "PREMIUM": 286.72, "DEALER'S": 250.88 },
  "11300": { "Standard": 361.60, "CLUB": 324.40, "PREMIUM": 289.28, "DEALER'S": 253.12 },
  "11400": { "Standard": 364.80, "CLUB": 327.20, "PREMIUM": 291.84, "DEALER'S": 255.36 },
  "11500": { "Standard": 368.00, "CLUB": 330.00, "PREMIUM": 294.40, "DEALER'S": 257.60 },
  "11600": { "Standard": 371.20, "CLUB": 332.80, "PREMIUM": 296.96, "DEALER'S": 259.84 },
  "11700": { "Standard": 374.40, "CLUB": 335.60, "PREMIUM": 299.52, "DEALER'S": 262.08 },
  "11800": { "Standard": 377.60, "CLUB": 338.40, "PREMIUM": 302.08, "DEALER'S": 264.32 },
  "11900": { "Standard": 380.80, "CLUB": 341.20, "PREMIUM": 304.64, "DEALER'S": 266.56 },
  "12000": { "Standard": 384.00, "CLUB": 344.00, "PREMIUM": 307.20, "DEALER'S": 268.80 },
  "12100": { "Standard": 387.20, "CLUB": 346.80, "PREMIUM": 309.76, "DEALER'S": 271.04 },
  "12200": { "Standard": 390.40, "CLUB": 349.60, "PREMIUM": 312.32, "DEALER'S": 273.28 },
  "12300": { "Standard": 393.60, "CLUB": 352.40, "PREMIUM": 314.88, "DEALER'S": 275.52 },
  "12400": { "Standard": 396.80, "CLUB": 355.20, "PREMIUM": 317.44, "DEALER'S": 277.76 },
  "12500": { "Standard": 400.00, "CLUB": 358.00, "PREMIUM": 320.00, "DEALER'S": 280.00 },
  "12600": { "Standard": 403.20, "CLUB": 360.80, "PREMIUM": 322.56, "DEALER'S": 282.24 },
  "12700": { "Standard": 406.40, "CLUB": 363.60, "PREMIUM": 325.12, "DEALER'S": 284.48 },
  "12800": { "Standard": 409.60, "CLUB": 366.40, "PREMIUM": 327.68, "DEALER'S": 286.72 },
  "12900": { "Standard": 412.80, "CLUB": 369.20, "PREMIUM": 330.24, "DEALER'S": 288.96 },
  "13000": { "Standard": 416.00, "CLUB": 372.00, "PREMIUM": 332.80, "DEALER'S": 291.20 },
  "13100": { "Standard": 419.20, "CLUB": 374.80, "PREMIUM": 335.36, "DEALER'S": 293.44 },
  "13200": { "Standard": 422.40, "CLUB": 377.60, "PREMIUM": 337.92, "DEALER'S": 295.68 },
  "13300": { "Standard": 425.60, "CLUB": 380.40, "PREMIUM": 340.48, "DEALER'S": 297.92 },
  "13400": { "Standard": 428.80, "CLUB": 383.20, "PREMIUM": 343.04, "DEALER'S": 300.16 },
  "13500": { "Standard": 432.00, "CLUB": 386.00, "PREMIUM": 345.60, "DEALER'S": 302.40 },
  "13600": { "Standard": 435.20, "CLUB": 388.80, "PREMIUM": 348.16, "DEALER'S": 304.64 },
  "13700": { "Standard": 438.40, "CLUB": 391.60, "PREMIUM": 350.72, "DEALER'S": 306.88 },
  "13800": { "Standard": 441.60, "CLUB": 394.40, "PREMIUM": 353.28, "DEALER'S": 309.12 },
  "13900": { "Standard": 444.80, "CLUB": 397.20, "PREMIUM": 355.84, "DEALER'S": 311.36 },
  "14000": { "Standard": 448.00, "CLUB": 400.00, "PREMIUM": 358.40, "DEALER'S": 313.60 },
  "14100": { "Standard": 451.20, "CLUB": 402.80, "PREMIUM": 360.96, "DEALER'S": 315.84 },
  "14200": { "Standard": 454.40, "CLUB": 405.60, "PREMIUM": 363.52, "DEALER'S": 318.08 },
  "14300": { "Standard": 457.60, "CLUB": 408.40, "PREMIUM": 366.08, "DEALER'S": 320.32 },
  "14400": { "Standard": 460.80, "CLUB": 411.20, "PREMIUM": 368.64, "DEALER'S": 322.56 },
  "14500": { "Standard": 464.00, "CLUB": 414.00, "PREMIUM": 371.20, "DEALER'S": 324.80 },
  "14600": { "Standard": 467.20, "CLUB": 416.80, "PREMIUM": 373.76, "DEALER'S": 327.04 },
  "14700": { "Standard": 470.40, "CLUB": 419.60, "PREMIUM": 376.32, "DEALER'S": 329.28 },
  "14800": { "Standard": 473.60, "CLUB": 422.40, "PREMIUM": 378.88, "DEALER'S": 331.52 },
  "14900": { "Standard": 476.80, "CLUB": 425.20, "PREMIUM": 381.44, "DEALER'S": 333.76 },
  "15000": { "Standard": 480.00, "CLUB": 428.00, "PREMIUM": 384.00, "DEALER'S": 336.00 },
  "15100": { "Standard": 483.20, "CLUB": 430.80, "PREMIUM": 386.56, "DEALER'S": 338.24 },
  "15200": { "Standard": 486.40, "CLUB": 433.60, "PREMIUM": 389.12, "DEALER'S": 340.48 },
  "15300": { "Standard": 489.60, "CLUB": 436.40, "PREMIUM": 391.68, "DEALER'S": 342.72 },
  "15400": { "Standard": 492.80, "CLUB": 439.20, "PREMIUM": 394.24, "DEALER'S": 344.96 },
  "15500": { "Standard": 496.00, "CLUB": 442.00, "PREMIUM": 396.80, "DEALER'S": 347.20 },
  "15600": { "Standard": 499.20, "CLUB": 444.80, "PREMIUM": 399.36, "DEALER'S": 349.44 },
  "15700": { "Standard": 502.40, "CLUB": 447.60, "PREMIUM": 401.92, "DEALER'S": 351.68 },
  "15800": { "Standard": 505.60, "CLUB": 450.40, "PREMIUM": 404.48, "DEALER'S": 353.92 },
  "15900": { "Standard": 508.80, "CLUB": 453.20, "PREMIUM": 407.04, "DEALER'S": 356.16 },
  "16000": { "Standard": 512.00, "CLUB": 456.00, "PREMIUM": 409.60, "DEALER'S": 358.40 },
  "16100": { "Standard": 515.20, "CLUB": 458.80, "PREMIUM": 412.16, "DEALER'S": 360.64 },
  "16200": { "Standard": 518.40, "CLUB": 461.60, "PREMIUM": 414.72, "DEALER'S": 362.88 },
  "16300": { "Standard": 521.60, "CLUB": 464.40, "PREMIUM": 417.28, "DEALER'S": 365.12 },
  "16400": { "Standard": 524.80, "CLUB": 467.20, "PREMIUM": 419.84, "DEALER'S": 367.36 },
  "16500": { "Standard": 528.00, "CLUB": 470.00, "PREMIUM": 422.40, "DEALER'S": 369.60 },
  "16600": { "Standard": 531.20, "CLUB": 472.80, "PREMIUM": 424.96, "DEALER'S": 371.84 },
  "16700": { "Standard": 534.40, "CLUB": 475.60, "PREMIUM": 427.52, "DEALER'S": 374.08 },
  "16800": { "Standard": 537.60, "CLUB": 478.40, "PREMIUM": 430.08, "DEALER'S": 376.32 },
  "16900": { "Standard": 540.80, "CLUB": 481.20, "PREMIUM": 432.64, "DEALER'S": 378.56 },
  "17000": { "Standard": 544.00, "CLUB": 484.00, "PREMIUM": 435.20, "DEALER'S": 380.80 },
  "17100": { "Standard": 547.20, "CLUB": 486.80, "PREMIUM": 437.76, "DEALER'S": 383.04 },
  "17200": { "Standard": 550.40, "CLUB": 489.60, "PREMIUM": 440.32, "DEALER'S": 385.28 },
  "17300": { "Standard": 553.60, "CLUB": 492.40, "PREMIUM": 442.88, "DEALER'S": 387.52 },
  "17400": { "Standard": 556.80, "CLUB": 495.20, "PREMIUM": 445.44, "DEALER'S": 389.76 },
  "17500": { "Standard": 560.00, "CLUB": 498.00, "PREMIUM": 448.00, "DEALER'S": 392.00 },
  "17600": { "Standard": 563.20, "CLUB": 500.80, "PREMIUM": 450.56, "DEALER'S": 394.24 },
  "17700": { "Standard": 566.40, "CLUB": 503.60, "PREMIUM": 453.12, "DEALER'S": 396.48 },
  "17800": { "Standard": 569.60, "CLUB": 506.40, "PREMIUM": 455.68, "DEALER'S": 398.72 },
  "17900": { "Standard": 572.80, "CLUB": 509.20, "PREMIUM": 458.24, "DEALER'S": 400.96 },
  "18000": { "Standard": 576.00, "CLUB": 512.00, "PREMIUM": 460.80, "DEALER'S": 403.20 },
  "18100": { "Standard": 579.20, "CLUB": 514.80, "PREMIUM": 463.36, "DEALER'S": 405.44 },
  "18200": { "Standard": 582.40, "CLUB": 517.60, "PREMIUM": 465.92, "DEALER'S": 407.68 },
  "18300": { "Standard": 585.60, "CLUB": 520.40, "PREMIUM": 468.48, "DEALER'S": 409.92 },
  "18400": { "Standard": 588.80, "CLUB": 523.20, "PREMIUM": 471.04, "DEALER'S": 412.16 },
  "18500": { "Standard": 592.00, "CLUB": 526.00, "PREMIUM": 473.60, "DEALER'S": 414.40 },
  "18600": { "Standard": 595.20, "CLUB": 528.80, "PREMIUM": 476.16, "DEALER'S": 416.64 },
  "18700": { "Standard": 598.40, "CLUB": 531.60, "PREMIUM": 478.72, "DEALER'S": 418.88 },
  "18800": { "Standard": 601.60, "CLUB": 534.40, "PREMIUM": 481.28, "DEALER'S": 421.12 },
  "18900": { "Standard": 604.80, "CLUB": 537.20, "PREMIUM": 483.84, "DEALER'S": 423.36 },
  "19000": { "Standard": 608.00, "CLUB": 540.00, "PREMIUM": 486.40, "DEALER'S": 425.60 },
  "19100": { "Standard": 611.20, "CLUB": 542.80, "PREMIUM": 488.96, "DEALER'S": 427.84 },
  "19200": { "Standard": 614.40, "CLUB": 545.60, "PREMIUM": 491.52, "DEALER'S": 430.08 },
  "19300": { "Standard": 617.60, "CLUB": 548.40, "PREMIUM": 494.08, "DEALER'S": 432.32 },
  "19400": { "Standard": 620.80, "CLUB": 551.20, "PREMIUM": 496.64, "DEALER'S": 434.56 },
  "19500": { "Standard": 624.00, "CLUB": 554.00, "PREMIUM": 499.20, "DEALER'S": 436.80 },
  "19600": { "Standard": 627.20, "CLUB": 556.80, "PREMIUM": 501.76, "DEALER'S": 439.04 },
  "19700": { "Standard": 630.40, "CLUB": 559.60, "PREMIUM": 504.32, "DEALER'S": 441.28 },
  "19800": { "Standard": 633.60, "CLUB": 562.40, "PREMIUM": 506.88, "DEALER'S": 443.52 },
  "19900": { "Standard": 636.80, "CLUB": 565.20, "PREMIUM": 509.44, "DEALER'S": 445.76 },
  "20000": { "Standard": 640.00, "CLUB": 568.00, "PREMIUM": 512.00, "DEALER'S": 448.00 },
  "20100": { "Standard": 643.20, "CLUB": 570.80, "PREMIUM": 514.56, "DEALER'S": 450.24 },
  "20200": { "Standard": 646.40, "CLUB": 573.60, "PREMIUM": 517.12, "DEALER'S": 452.48 },
  "20300": { "Standard": 649.60, "CLUB": 576.40, "PREMIUM": 519.68, "DEALER'S": 454.72 },
  "20400": { "Standard": 652.80, "CLUB": 579.20, "PREMIUM": 522.24, "DEALER'S": 456.96 },
  "20500": { "Standard": 656.00, "CLUB": 582.00, "PREMIUM": 524.80, "DEALER'S": 459.20 },
  "20600": { "Standard": 659.20, "CLUB": 584.80, "PREMIUM": 527.36, "DEALER'S": 461.44 },
  "20700": { "Standard": 662.40, "CLUB": 587.60, "PREMIUM": 529.92, "DEALER'S": 463.68 },
  "20800": { "Standard": 665.60, "CLUB": 590.40, "PREMIUM": 532.48, "DEALER'S": 465.92 },
  "20900": { "Standard": 668.80, "CLUB": 593.20, "PREMIUM": 535.04, "DEALER'S": 468.16 },
  "21000": { "Standard": 672.00, "CLUB": 596.00, "PREMIUM": 537.60, "DEALER'S": 470.40 },
  "21100": { "Standard": 675.20, "CLUB": 598.80, "PREMIUM": 540.16, "DEALER'S": 472.64 },
  "21200": { "Standard": 678.40, "CLUB": 601.60, "PREMIUM": 542.72, "DEALER'S": 474.88 },
  "21300": { "Standard": 681.60, "CLUB": 604.40, "PREMIUM": 545.28, "DEALER'S": 477.12 },
  "21400": { "Standard": 684.80, "CLUB": 607.20, "PREMIUM": 547.84, "DEALER'S": 479.36 },
  "21500": { "Standard": 688.00, "CLUB": 610.00, "PREMIUM": 550.40, "DEALER'S": 481.60 },
  "21600": { "Standard": 691.20, "CLUB": 612.80, "PREMIUM": 552.96, "DEALER'S": 483.84 },
  "21700": { "Standard": 694.40, "CLUB": 615.60, "PREMIUM": 555.52, "DEALER'S": 486.08 },
  "21800": { "Standard": 697.60, "CLUB": 618.40, "PREMIUM": 558.08, "DEALER'S": 488.32 },
  "21900": { "Standard": 700.80, "CLUB": 621.20, "PREMIUM": 560.64, "DEALER'S": 490.56 },
  "22000": { "Standard": 704.00, "CLUB": 624.00, "PREMIUM": 563.20, "DEALER'S": 492.80 },
  "22100": { "Standard": 707.20, "CLUB": 626.80, "PREMIUM": 565.76, "DEALER'S": 495.04 },
  "22200": { "Standard": 710.40, "CLUB": 629.60, "PREMIUM": 568.32, "DEALER'S": 497.28 },
  "22300": { "Standard": 713.60, "CLUB": 632.40, "PREMIUM": 570.88, "DEALER'S": 499.52 },
  "22400": { "Standard": 716.80, "CLUB": 635.20, "PREMIUM": 573.44, "DEALER'S": 501.76 },
  "22500": { "Standard": 720.00, "CLUB": 638.00, "PREMIUM": 576.00, "DEALER'S": 504.00 },
  "22600": { "Standard": 723.20, "CLUB": 640.80, "PREMIUM": 578.56, "DEALER'S": 506.24 },
  "22700": { "Standard": 726.40, "CLUB": 643.60, "PREMIUM": 581.12, "DEALER'S": 508.48 },
  "22800": { "Standard": 729.60, "CLUB": 646.40, "PREMIUM": 583.68, "DEALER'S": 510.72 },
  "22900": { "Standard": 732.80, "CLUB": 649.20, "PREMIUM": 586.24, "DEALER'S": 512.96 },
  "23000": { "Standard": 736.00, "CLUB": 652.00, "PREMIUM": 588.80, "DEALER'S": 515.20 },
  "23100": { "Standard": 739.20, "CLUB": 654.80, "PREMIUM": 591.36, "DEALER'S": 517.44 },
  "23200": { "Standard": 742.40, "CLUB": 657.60, "PREMIUM": 593.92, "DEALER'S": 519.68 },
  "23300": { "Standard": 745.60, "CLUB": 660.40, "PREMIUM": 596.48, "DEALER'S": 521.92 },
  "23400": { "Standard": 748.80, "CLUB": 663.20, "PREMIUM": 599.04, "DEALER'S": 524.16 },
  "23500": { "Standard": 752.00, "CLUB": 666.00, "PREMIUM": 601.60, "DEALER'S": 526.40 },
  "23600": { "Standard": 755.20, "CLUB": 668.80, "PREMIUM": 604.16, "DEALER'S": 528.64 },
  "23700": { "Standard": 758.40, "CLUB": 671.60, "PREMIUM": 606.72, "DEALER'S": 530.88 },
  "23800": { "Standard": 761.60, "CLUB": 674.40, "PREMIUM": 609.28, "DEALER'S": 533.12 },
  "23900": { "Standard": 764.80, "CLUB": 677.20, "PREMIUM": 611.84, "DEALER'S": 535.36 },
  "24000": { "Standard": 768.00, "CLUB": 680.00, "PREMIUM": 614.40, "DEALER'S": 537.60 },
  "24100": { "Standard": 771.20, "CLUB": 682.80, "PREMIUM": 616.96, "DEALER'S": 539.84 },
  "24200": { "Standard": 774.40, "CLUB": 685.60, "PREMIUM": 619.52, "DEALER'S": 542.08 },
  "24300": { "Standard": 777.60, "CLUB": 688.40, "PREMIUM": 622.08, "DEALER'S": 544.32 },
  "24400": { "Standard": 780.80, "CLUB": 691.20, "PREMIUM": 624.64, "DEALER'S": 546.56 },
  "24500": { "Standard": 784.00, "CLUB": 694.00, "PREMIUM": 627.20, "DEALER'S": 548.80 },
  "24600": { "Standard": 787.20, "CLUB": 696.80, "PREMIUM": 629.76, "DEALER'S": 551.04 },
  "24700": { "Standard": 790.40, "CLUB": 699.60, "PREMIUM": 632.32, "DEALER'S": 553.28 },
  "24800": { "Standard": 793.60, "CLUB": 702.40, "PREMIUM": 634.88, "DEALER'S": 555.52 },
  "24900": { "Standard": 796.80, "CLUB": 705.20, "PREMIUM": 637.44, "DEALER'S": 557.76 },
  "25000": { "Standard": 800.00, "CLUB": 708.00, "PREMIUM": 640.00, "DEALER'S": 560.00 }
}

export default standardFees;
