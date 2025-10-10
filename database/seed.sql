-- Insertion of data test in Jobboard --

-- Insertion people --
INSERT INTO people(email, password_hash, name, phone, status) VALUES
-- Admin --
('admin@jobboard.com', '$2b$10$abcdefghijklmnopqrstuv', 'Admin Principal', '0601020304', 'admin'),

-- Companies --
('contact@techcorp.fr', '$2b$10$abcdefghijklmnopqrstuv', 'Marie Dubois', '0612345678', 'company'),
('rh@innovsolutions.fr', '$2b$10$abcdefghijklmnopqrstuv', 'Pierre Martin', '0623456789', 'company'),

-- Candidate --
('jean.dupont@email.fr', '$2b$10$abcdefghijklmnopqrstuv', 'Jean Dupont', '0645678901', 'candidate');

-- Insertion of companies--
INSERT INTO companies (id_people, company_name) VALUES
(2, 'TechCorp France'),
(3, 'InnovSolutions');

-- Insertion of advetisements --
INSERT INTO advertisements (id_company, title, short_description, long_description, wages, working_time, place) VALUES
-- TechCorp --
(1, 'Développeur Full Stack Node.js', 
 'Rejoignez notre équipe pour développer des applications web innovantes',
 'Nous recherchons un développeur Full Stack passionné pour rejoindre notre équipe dynamique. Vous travaillerez sur des projets variés utilisant Node.js, Express, PostgreSQL et React. Vous participerez à toutes les phases du développement, de la conception à la mise en production.',
 '35000-45000€/an', 
 'Temps plein (35h)', 
 'Paris - Télétravail partiel'),

 -- InnovSolutions --
(2, 'Designer UX/UI', 
 'Créez des expériences utilisateur exceptionnelles',
 'Nous cherchons un Designer UX/UI créatif pour concevoir des interfaces intuitives et esthétiques. Vous travaillerez en étroite collaboration avec les développeurs et les product managers. Maîtrise de Figma et Adobe XD indispensable.',
 '32000-42000€/an', 
 'Temps plein (35h)', 
 'Bordeaux - Sur site');

-- Insertion of applications --
INSERT INTO applications (id_people, id_advertisement, message) VALUES
-- Applications for TechCorp --
(4, 1, 'Bonjour, je suis très intéressé par ce poste de développeur Full Stack. J''ai 3 ans d''expérience avec Node.js et React, et je serais ravi de contribuer à vos projets innovants.');