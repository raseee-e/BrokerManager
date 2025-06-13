INSERT INTO stocks (symbol, name, description, openrate, closerate, peakprice, lowprice, currentrate, yearlow, yearhigh)
VALUES
  ('AAPL', 'Apple Inc.', 'Apple stock', 170, 172, 175, 169, 171, 150, 180),
  ('MSFT', 'Microsoft', 'Microsoft stock', 220, 216, 260, 195, 200, 180, 270),
  ('DIS', 'Disney', 'Disney stock', 460, 521, 530, 456, 511, 400, 600),
  ('IBM', 'IBM', 'IBM stock', 8, 8, 8, 8, 8, 8, 8),
  ('KO', 'Coca-Cola', 'Coca-Cola stock', 620, 717, 789, 650, 740, 600, 800);

  -- Beispiel für IBM
INSERT INTO stock_prices (stock_id, time, price) VALUES
  (4, '09:00', 380),
  (4, '10:00', 350),
  (4, '11:00', 370),
  (4, '12:00', 390),
  (4, '13:00', 360),
  (4, '14:00', 400),
  (4, '15:00', 380),
  (4, '16:00', 390),
  (4, '17:00', 395);

-- Beispiel für AAPL (Apple)
INSERT INTO stock_prices (stock_id, time, price) VALUES
  (1, '09:00', 170),
  (1, '10:00', 172),
  (1, '11:00', 171),
  (1, '12:00', 173),
  (1, '13:00', 174),
  (1, '14:00', 172),
  (1, '15:00', 171),
  (1, '16:00', 170),
  (1, '17:00', 172);

-- Beispiel für MSFT
INSERT INTO stock_prices (stock_id, time, price) VALUES
  (2, '09:00', 220),
  (2, '10:00', 222),
  (2, '11:00', 219),
  (2, '12:00', 217),
  (2, '13:00', 216),
  (2, '14:00', 214),
  (2, '15:00', 215),
  (2, '16:00', 213),
  (2, '17:00', 216);

-- Beispiel für DIS
INSERT INTO stock_prices (stock_id, time, price) VALUES
  (3, '09:00', 460),
  (3, '10:00', 470),
  (3, '11:00', 480),
  (3, '12:00', 490),
  (3, '13:00', 500),
  (3, '14:00', 510),
  (3, '15:00', 520),
  (3, '16:00', 515),
  (3, '17:00', 521);

-- Beispiel für KO
INSERT INTO stock_prices (stock_id, time, price) VALUES
  (5, '09:00', 620),
  (5, '10:00', 640),
  (5, '11:00', 660),
  (5, '12:00', 680),
  (5, '13:00', 700),
  (5, '14:00', 720),
  (5, '15:00', 740),
  (5, '16:00', 730),
  (5, '17:00', 717);
