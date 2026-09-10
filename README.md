# Lição do Lucas

# Desafio 6

## O que é SSH?

SSH (Secure Shell) é um protocolo criptográfico que estabelece uma conexão remota segura entre um cliente e um servidor. No desenvolvimento de software, ele é utilizado para administrar servidores remotos via terminal, executar tarefas automatizadas e realizar operações no Git (como push e pull) com autenticação contínua e criptografada.

### **Diferenças entre HTTPS e SSH no Git**
| Características | HTTPS | SSH |
| ------------- |-------------|:-------:|
|Autenticação      | Personal Access Token (PAT) ou gerenciador de credenciais    |Par de chaves criptográficas (Pública e Privada)|
| Configuração inicial   | Nenhuma para repositórios públicos; login via token para privados    |Criação de chave local e cadastro da chave pública na plataforma |
| Facilidade de uso diário     | Pode solicitar token periodicamente se não houver gerenciador    | Autenticação transparente e automática a cada operação|
| Rede e Firewall |Utiliza a porta 443 (raramente bloqueada em redes restritas) |Utiliza a porta 22 (pode ser bloqueada em redes corporativas) |

### **Casos de uso recomendados**
**HTTPS**: Mais indicado para acessos pontuais, download de código público, máquinas temporárias (ex: ambientes de CI/CD descartáveis) ou redes corporativas com bloqueio da porta 22.

**SSH**: Mais indicado para a máquina principal de trabalho do desenvolvedor e ambientes de automação fixa, pois elimina a necessidade de digitar senhas ou gerenciar tokens após a configuração inicial.

## Passo a Passo Prático: Configuração e Clonagem via SSH

### 1. Gerar a chave SSH
Abra o terminal e execute o comando abaixo (substituindo pelo seu e-mail cadastrado no GitHub):

ssh-keygen -t ed25519 -C "seu_email@exemplo.com"

### 2. Copiar a chave pública gerada
Exiba e copie o conteúdo da chave pública gerada:

cat ~/.ssh/id_ed25519.pub

### 3. Adicionar a chave pública ao GitHub

Acesse o GitHub e navegue até Settings > SSH and GPG keys.

Clique em New SSH key.

Preencha o Title com o nome do seu computador e cole o texto copiado no campo Key.

Clique em Add SSH key.

### 4. Clonar o repositório via SSH
No repositório do GitHub, clique no botão Code, escolha a aba SSH e copie a URL (no formato git@github.com:usuario/repositorio.git). No terminal, rode:

git clone git@github.com:usuario/repositorio.git

#### A clonagem por HTTPS
(git clone [https://github.com/usuario/repositorio.git](https://github.com/usuario/repositorio.git)) funciona imediatamente sem pré-configuração, mas exige a validação de um token no primeiro envio de código. Com SSH, há a etapa prévia de vincular as chaves, mas as interações subsequentes ocorrem de forma transparente, pois o servidor GitHub valida automaticamente a sua chave privada local com a chave pública cadastrada.
# Desafio 7


## HTTP (Hypertext Transfer Protocol)** 
É o protocolo base da comunicação na web para a transferência de dados entre um navegador (cliente) e um servidor, enquanto o **HTTPS (Hypertext Transfer Protocol Secure)** é a versão segura do HTTP que adiciona uma camada de criptografia via protocolo TLS (Transport Layer Security) para proteger as informações trafegadas.

**Como funcionam e diferenças**

-   **HTTP:** Opera enviando requisições e respostas em texto puro (_plaintext_). Qualquer intermediário na rede (roteadores, provedores de internet, pontos Wi-Fi públicos) pode ler ou alterar o conteúdo trafegado.
    
-   **HTTPS:** Estabelece primeiro uma conexão segura através do _TLS Handshake_, no qual cliente e servidor autenticam a identidade do servidor e negociam chaves de criptografia. Toda a comunicação HTTP subsequente passa a trafegar dentro deste canal protegido.

| **Característica** | HTTP | HTTPS | 
|--|--|--|
| Porta Padrão | 80 | 443 |
|Criptografia|Nenhuma (dados em texto simples)|Criptografia ponta a ponta (TLS/SSL)|
|Autenticidade|Não garante a identidade do servidor|Validada por Certificado Digital|
|Navegadores|Marcado como "Não seguro"|Conexão sinalizada como segura|

**Importância no Desenvolvimento Web** 
A criptografia previne ataques como _Man-in-the-Middle_ (interceptação e alteração de dados) e roubo de credenciais ou dados bancários. No desenvolvimento web moderno, o HTTPS é indispensável porque:

-   É pré-requisito para APIs modernas do navegador (como Geolocalização, Service Workers/PWA e acesso à Câmera).
    
-   É um fator direto de ranqueamento em mecanismos de busca (SEO).
    
-   Impede que os navegadores exibam alertas ostensivos de insegurança ao usuário.
    

## **Prático: Inspecionando Requisições e Certificados no Navegador**

**1. Comparando requisições na aba Network**

1.  Abra o navegador e acione as Ferramentas do Desenvolvedor pressionando `F12` (ou `Ctrl + Shift + I` / `Cmd + Option + I`).
    
2.  Vá até a aba **Network** (Rede).
    
3.  Ao acessar um site **HTTP** (ex: `[http://neverssl.com](http://neverssl.com)`), selecione a requisição principal na lista. Na guia **Headers**, você verá o esquema de URL `http://` e os dados trafegando sem criptografia.
    
4.  Ao acessar um site **HTTPS** (ex: `[https://github.com](https://github.com)`), selecione a requisição. Na guia **Headers**, observe a URL `https://`. No tráfego real de rede, todo o payload (conteúdo, formulários e cookies) viaja indecifrável para terceiros.
    

**2. Verificando o Certificado de Segurança**

1.  Na barra de endereço do navegador, clique no ícone de configurações ao lado da URL HTTPS (ícone de ajuste ou cadeado).
    
2.  Clique em **A conexão é segura** e selecione **O certificado é válido**.
    
3.  Na janela exibida, verifique os campos principais:
    
    -   **Emitido para (Subject):** Garante que o certificado pertence ao domínio acessado.
        
    -   **Emitido por (Issuer):** A Autoridade Certificadora (CA) reconhecida que validou o domínio (ex: Let's Encrypt, DigiCert).
        
    -   **Validade:** O período de vigência do certificado.
        
4.  _Dica:_ Na aba **Security** do próprio DevTools, você também pode visualizar os detalhes do algoritmo de criptografia e a versão do TLS utilizada na conexão (como TLS 1.2 ou TLS 1.3).
# Desafio 8


## **Docker** 
É uma plataforma de containerização de código aberto que permite empacotar uma aplicação e todas as suas dependências em uma unidade padronizada chamada **container**.

O Docker resolve o clássico problema do "na minha máquina funciona", eliminando inconsistências entre os ambientes de desenvolvimento, teste e produção. Um **container** é um ambiente isolado em nível de processo que executa sobre o sistema operacional hospedeiro. Em vez de virtualizar todo o hardware para rodar um novo sistema operacional, o container compartilha o Kernel do sistema hospedeiro e isola apenas as bibliotecas, variáveis e binaries necessários para a aplicação funcionar.

**Diferenças entre Containers (Docker) e Máquinas Virtuais (VMs)**

| Característica | Container (Docker) | Máquina Virtual (VM) |
|--|--|--|
| Arquitetura | Compartilha o Kernel do SO hospedeiro | Inclui um SO Convidado (_Guest OS_) completo |
|Consumo de Recursos|Mínimo (MBs de RAM e CPU sob demanda)|Alto (reserva GBs de RAM e vCPUs dedicadas)|
|Tempo de Inicialização|Segundos ou milissegundos|Minutos|
|Tamanho no Disco|Leve (geralmente dezenas ou centenas de MBs)|Pesado (dezenas de Gigabytes por imagem)|
|Isolamento|A nível de processo (via _namespaces_ e _cgroups_)|A nível de hardware (via _Hypervisor_)|

**Passo a Passo Prático: Executando e Gerenciando Containers**

**1. Instalar o Docker** Faça o download do **Docker Desktop** (Windows/macOS) ou instale o **Docker Engine** (Linux) a partir do site oficial (`docker.com`). Certifique-se de que o Docker esteja em execução no seu sistema.

**2. Executar um container a partir de uma imagem pública** Abra o terminal e execute o comando a seguir para baixar a imagem oficial do servidor Nginx e subir um container:
`docker run -d -p 8080:80 --name meu-web-server nginx`
-   Parâmetro `-d`: Executa o container em segundo plano (_detached mode_).
    
-   Parâmetro `-p 8080:80`: Redireciona a porta 8080 da sua máquina física para a porta 80 dentro do container.
    
-   Parâmetro `--name meu-web-server`: Define um nome para facilitar o gerenciamento.
    

_(Você pode testar abrindo `http://localhost:8080` no seu navegador)_.

**3. Listar os containers em execução** Para listar todos os containers atualmente em execução na máquina, utilize:
`docker ps`

_(Para listar todos os containers, incluindo os parados, utilize `docker ps -a`)_.

**4. Interromper e remover o container** Para parar o container em execução:
`docker stop meu-web-server`

Para remover o container interrompido do seu sistema:
`docker rm meu-web-server`
