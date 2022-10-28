DROP TABLE IF EXISTS coletas;
DROP TABLE IF EXISTS associados;
DROP TABLE IF EXISTS adm;

CREATE TABLE public.adm (
                adm_cpf VARCHAR(11) NOT NULL,
                adm_name VARCHAR NOT NULL,
                adm_data_cadastro DATE NOT NULL,
                adm_senha VARCHAR NOT NULL,
                adm_data_modificacao DATE,
                CONSTRAINT adm_pk PRIMARY KEY (adm_cpf)
);


CREATE SEQUENCE public.associados_associado_id_seq;

CREATE TABLE public.associados (
                associado_id INTEGER NOT NULL DEFAULT nextval('public.associados_associado_id_seq'),
                associado_name VARCHAR NOT NULL,
                associado_email VARCHAR,
                associado_phone VARCHAR,
                associado_status VARCHAR NOT NULL,
                associado_data_cadastro DATE NOT NULL,
                associado_data_modificacao DATE,
                CONSTRAINT associados_pk PRIMARY KEY (associado_id)
);


ALTER SEQUENCE public.associados_associado_id_seq OWNED BY public.associados.associado_id;

CREATE SEQUENCE public.coletas_coleta_id_seq;

CREATE TABLE public.coletas (
                coleta_id INTEGER NOT NULL DEFAULT nextval('public.coletas_coleta_id_seq'),
                associado_id INTEGER NOT NULL,
                coleta_data DATE NOT NULL,
                coleta_kg REAL,
                CONSTRAINT coletas_pk PRIMARY KEY (coleta_id)
);


ALTER SEQUENCE public.coletas_coleta_id_seq OWNED BY public.coletas.coleta_id;

ALTER TABLE public.associados ADD CONSTRAINT unique_email UNIQUE (associado_email);

ALTER TABLE public.coletas ADD CONSTRAINT associado_coletas_fk
FOREIGN KEY (associado_id)
REFERENCES public.associados (associado_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;
