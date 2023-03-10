FROM nvidia/opengl:base-ubuntu20.04

WORKDIR /tmp

ENV DEBIAN_FRONTEND=noninteractive

# ENV LIBGL_ALWAYS_INDIRECT=1

ENV NVIDIA_DRIVER_CAPABILITIES ${NVIDIA_DRIVER_CAPABILITIES},display

# change apt source
RUN sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list

RUN apt clean && \
    apt update -y && \
    apt install -y \
    build-essential \
    sudo \
    locales \
    rsync \
    vim \
    git \
    wget \
    curl \
    zsh \
    sqlite3 \
    net-tools \
    redis \
    alien libaio1 unixodbc \
    tmux \
    netcat \
    sysstat \
    iftop \
    htop \
    fping \
    multitail \
    python3-dev \
    python3-pip \
    python3-pyqt5 \
    graphviz \
    chrpath \
    libfuse2 \
    openssh-server \
    cmake \
    qt5-default \
    libqt5svg5-dev \
    libpulse0

RUN locale-gen en_US.UTF-8

RUN ln -s /usr/bin/python3 /usr/bin/python

COPY installers /tmp/installers
COPY skel /tmp/skel
RUN bash /tmp/installers/install_skel.sh
RUN bash /tmp/installers/install_ssh.sh
RUN python -m pip install --upgrade pip -i https://pypi.tuna.tsinghua.edu.cn/simple

RUN python -m pip install -i https://pypi.tuna.tsinghua.edu.cn/simple \
    grpcio==1.41.0 \
    grpcio-tools==1.41.0 \
    python-gflags==3.1.2 \
    requests==2.22.0 \
    pyqtconsole==1.2.1 \
    ursina==4.0.0 \
    nuitka==0.6.18.2 \
    py_trees==2.1.6 \
    simple_watchdog_timer==0.1.1 \
    jsondiff==1.3.0 \
    shapely==1.8.0 \
    configparser==5.2.0 \
    torch==1.12.0

RUN python -m pip install -i https://pypi.tuna.tsinghua.edu.cn/simple \
    pandas==1.5.1 \
    sqlalchemy_utils==0.38.3 \
    tablib==3.2.1 \
    lightgbm==3.3.3 \
    cryptography==38.0.4

RUN pip install redis

RUN pip install PyMySQL

RUN pip install SQLAlchemy

RUN pip install matplotlib

RUN pip install tqdm

RUN pip install paramiko

COPY NotoSerifCJK-Regular.ttc /usr/share/fonts/NotoSerifCJK-Regular.ttc

RUN fc-cache -vf
